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
      Anotações
      </h1>
    </Grid>
    </Grid>
  )
}