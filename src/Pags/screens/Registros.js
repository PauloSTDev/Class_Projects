import React, {useState, useLayoutEffect} from 'react'
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Button,
  IconButton
  
} from '@material-ui/core';
import firebase from '../../services/FirebaseConnect'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Opcoes(props){

  const [lista, setLista] = useState([])

  useLayoutEffect(()=> {

    firebase
      .database()
      .ref(`/Contatos`)
      .on('value',snapchot =>{
        let dados = snapchot.val()
        const keys =Object.keys(dados)
        const lista = keys.map((key)=>{
          return {...dados[key], id: key}
        })
        console.log(lista)
        setLista(lista)
      })
  }, [])


  return(
    <Grid container>
    <Grid item sm={12} xs={12}>
    <TableContainer>
      <Table aria-label="a simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Assunto</TableCell>
            <TableCell align="right">Mensagem</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map((item, key)=>{
            return <TableRow key={key}>
              <TableCell component="th" scope="row">{item.nome}</TableCell>
          <TableCell align="right">{item.mensagem}</TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.assunto}</TableCell>
            </TableRow>
          }
          )}
            
        </TableBody>
      </Table>
    </TableContainer>
    <Grid item sm={12} xs={12}>
        <Button
        onClick={()=> props.setScreen(2)}
        variant="contained"
        style={{color: "white", backgroundColor: "black", float:"right"}}>
          <b>
            Novo Registro
          </b>
        </Button>
        </Grid>
    </Grid>
    </Grid>
  )
}