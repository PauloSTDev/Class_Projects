import React, { useState, useLayoutEffect} from 'react'
import {
  Grid,
  Button,

  
} from '@material-ui/core';
import firebase from '../../services/FirebaseConnect'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Recados(props){

    const [lista, setLista] = useState([])

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
  

    return(
        <div>
        <TableContainer>
        <Table aria-label="a simple table">
        <TableHead>
            <TableRow>
                <TableCell align="right">Mensagem</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {lista.map((item, key)=>{
                return <TableRow key={key}>
            <TableCell align="right">{item.mensagem}</TableCell>
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
        </div>
    )
}