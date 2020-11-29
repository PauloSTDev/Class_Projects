import React, {useState} from 'react'
import {
  Button,
  Grid,
  TextField,
  
} from '@material-ui/core';

import firebase from '../../services/FirebaseConnect'


export default function Opcoes(){

  const salvarDados=()=>{
    let objeto ={
      nome: nome,
      whats: whats
    }
    firebase
      .database()
      .ref("Contatos")
      .set(objeto)
      .then(()=>{
        console.log("Enviado")
      })
      .catch((erro)=> {
        console.log("Erro")
      })
  }

  const[nome, setNome] =useState("")
  const[whats, setWhats] =useState("")

  return(
    <Grid container>
    <Grid item sm={12} xs={12}>
    <TextField
      label="Nome Completo"
      variant="outlined"
      value={nome}
      size="small"
      type="nome"
      onChange={(e)=>setNome(e.target.value)}
      style={{ width: "100%", marginBottom: 10}} />
     <TextField
      label="Whats"
      variant="outlined"
      value={whats}
      size="small"
      type="email"
      onChange={(e)=>setWhats(e.target.value)}
      style={{ width: "100%"}} />
      <Button
        onClick={salvarDados}
        variant="contained"
        style={{color: "white", backgroundColor: "black"}}>
          <b>
            Enviar Dados
          </b>
      </Button>
    </Grid>
    </Grid>
  )
}