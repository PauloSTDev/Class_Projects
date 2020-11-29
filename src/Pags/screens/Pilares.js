import React from 'react'
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Button,
  IconButton
  
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'
import firebase from '../../services/FirebaseConnect'


export default function Opcoes(){
  return(
    <Grid container>
    <Grid item sm={12} xs={12}>
      <h1 align="center">
      Temos o know how em 5 pilares
      </h1>
      <h2>
      <div>- Orientação de produção.</div>
      <div>- Orientação de produtos.</div>
      <div>- Orientação de vendas.</div>
      <div>- Orientação de marketing.</div>
      <div>- Orientação de marketing holístico.</div>
      </h2>
    </Grid>
    </Grid>
  )
}