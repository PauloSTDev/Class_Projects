import '../App.css';

import firebase from '../services/FirebaseConnect'
import {useHistory} from 'react-router-dom'
import React, {useState, useLayoutEffect} from 'react'
import {
  Button,
  Grid,
  TextField,
  Checkbox,
  InputBase
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';



function Login() {

  useLayoutEffect(()=> {

    firebase
      .database()
      .ref(`/Contatos`)
      .on('value',snapchot =>{
        if(snapchot.val()){
          let dados = snapchot.val()
          const keys =Object.keys(dados)
          const lista = keys.map((key)=>{
            return {...dados[key], id: key}
          })
          console.log(lista)
          setLista(lista)
        }else{
          setLista([])
        }
      })
    }, [])

  const [lista, setLista] = useState([])

  let history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")
  const [lembreme, setLembreme] = useState(false)


  useLayoutEffect(() => {

    let storageEmail = localStorage.getItem("email")
    let storagePassword = localStorage.getItem("password")
    setTimeout(()=> {
    setEmail(storageEmail)
    setPassword(storagePassword)

    }, 1000)
    
  }, [])

  const login =()=> {

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

      .then((retorno) => {
        setMsg("Usuário logado!")
        sessionStorage.setItem("uuid", retorno.user.uid)
        history.push("/menu")
        if (lembreme ===true){
          localStorage.setItem("email", email)
          localStorage.setItem("password", password)
        }else{
          localStorage.removeItem("email")
          localStorage.removeItem("password")
        }
      })
      .catch(
        (erro) => {
          setMsg("Usuário ou senha inválidos!")
      }
      )
  }

  return (
    <>
    <div>
      <h1 align="center">
        Seja bem vindo(a)
      </h1>
    </div>
      <header id="header">
          <h1 align="center">Agro GP</h1>
          <Grid container spacing={1}>

          <Grid item sm={4} xs={4}>
              
            </Grid>
            <Grid item sm={12} xs={12} align="center">
              <TextField
              label="E-mail"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}/>
            </Grid>
            <Grid item sm={12} xs={12} align="center">
              <TextField
              label="Senha"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              style={{marginBottom: 5}}
              />
            </Grid>
            <Grid item sm={12} xs={12} align="center">
              <div>
              <Checkbox
              checked={lembreme}
              onChange={(e) =>setLembreme(e.target.checked)}
              spacing={1}
              style={{color: "black"}}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            /> Lembre-me
            <div id="msg">
              {msg}
            </div>
            </div>
            <Button
            onClick={login}
            variant="contained"
            style={{color: "white", backgroundColor: "black"}}>
              <b>
                Logar
              </b>
            </Button>
            </Grid>
          </Grid>
        <div>
          <h1 align="left">
            Mensagens dos usuários
          </h1>
          <h2>
          <TableContainer >
            
          <Table>
            {lista.map((item, key)=>{
                return <TableRow key={key}><TableCell>{item.mensagem}</TableCell></TableRow>
            }
            )}
          </Table>
          </TableContainer>
          </h2>
        </div>
          
        </header>
      </>
);
}

export default Login;
