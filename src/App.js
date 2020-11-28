import './App.css';

import firebase from './services/FirebaseConnect'
import React, {useState} from 'react'
import {
  Button,
  Grid,
  TextField
} from '@material-ui/core';


function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const login =()=> {

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

      .then((retorno) => {
        console.log(retorno.user.uid)
      })
      .catch(
        (erro) => {
          console.log(erro)
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
            <Button
            onClick={login}
            variant="contained"
            color="primary">
              Logar
            </Button>
            </Grid>
          </Grid>
          <footer>
            <div id="layout">
          @Projeto Agro GP. Todos os direitos reservados
        </div>
          </footer>
        
        </header>
      </>
);
}

export default App;
