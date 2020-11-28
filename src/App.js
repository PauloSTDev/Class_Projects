import './App.css';


import React from 'react'
import {
  Button,
  Grid,
  rgbToHex,
  TextField

} from '@material-ui/core';
function App() {

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
              type="email"/>
            </Grid>
            <Grid item sm={12} xs={12} align="center">
              <TextField
              label="Senha"
              variant="outlined"
              type="password" style={{marginBottom: 5}}/>
            </Grid>
            <Grid item sm={12} xs={12} align="center">
            <Button variant="contained"color="primary">
              Logar
            </Button>
            </Grid>
          </Grid>
        <div id="layout">
          @Projeto Agro GP. Todos os direitos reservados
        </div>
        </header>
      </>
);
}

export default App;
