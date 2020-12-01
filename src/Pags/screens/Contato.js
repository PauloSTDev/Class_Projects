import React, {useState} from 'react'
import {
  Button,
  Grid,
  TextField,
  
} from '@material-ui/core';

import firebase from '../../services/FirebaseConnect'
import { v4 as uuidv4 } from 'uuid';


export default function Contato(props){

  const salvarDados=()=>{
    let objeto ={
      nome: nome,
      email: email,
      assunto: assunto,
      mensagem: mensagem
    }


    const limpar=()=>{
       setNome("")
       setEmail("")
       setAssunto("")
       setMensagem("")
    }

    let code = uuidv4()
    firebase
      .database()
      .ref(`Contatos/${code}`)
      .set(objeto)
      .then(()=>{
        limpar()
      })
      .catch((erro)=> {
        console.log("Erro")
      })
  }

  const[nome, setNome] =useState("")
  const[email, setEmail] =useState("")
  const[assunto, setAssunto] =useState("")
  const[mensagem, setMensagem] =useState("")



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
      label="Email"
      variant="outlined"
      value={email}
      size="small"
      type="email"
      onChange={(e)=>setEmail(e.target.value)}
      style={{ width: "100%", marginBottom: 10}} />
      <TextField
      label="Assunto"
      variant="outlined"
      value={assunto}
      size="small"
      type="assunto"
      onChange={(e)=>setAssunto(e.target.value)}
      style={{ width: "100%", marginBottom: 10}} />
      <TextField
      label="Mensagem"
      variant="outlined"
      value={mensagem}
      size="small"
      type="mensagem"
      onChange={(e)=>setMensagem(e.target.value)}
      style={{ width: "100%", marginBottom: 10}} />
      <Grid item sm={12} xs={12}>
        <Button
        onClick={salvarDados}
        variant="contained"
        style={{color: "white", backgroundColor: "black", float: "left"}}>
          <b>
            Enviar
          </b>
        </Button>
      </Grid>
      <Grid item sm={12} xs={12}>
      <Button
        onClick={()=> props.setScreen(3)}
        variant="contained"
        style={{color: "white", backgroundColor: "black", float:"right"}}>
          <b>
            Cancelar
          </b>
        </Button>
        </Grid> 
    </Grid>
    </Grid>
  )
}