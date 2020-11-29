import './App.css';

import firebase from './services/FirebaseConnect'
import React, {useState} from 'react'
import {
  Button,
  Grid,
  TextField,
  Checkbox,
  InputBase
} from '@material-ui/core';


function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [msg, setMsg] = useState("")
  const [lembreme, setLembreme] = useState(false)


  const login =()=> {

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

      .then((retorno) => {
        setMsg("Usuário logado!")
        
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
          msg("Usuário ou senha inválidos!")
      }
      )
  }

  return (
    <>
      <header>
          <h1 align="center">Agro GP</h1>
          <Grid container spacing={1}>

          <Grid item sm={12} xs={12}>
              
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
              color="-moz-initial"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            /> Lembre-me
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
          
        </header><footer>
          <div id="layout">
            @Projeto Agro GP. Todos os direitos reservados
          </div>
          </footer>
      </>
);
}

export default App;
