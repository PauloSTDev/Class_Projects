import React, { useState } from 'react'
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Button,
  MenuList,
  MenuItem
  
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useHistory, HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import firebase from '../services/FirebaseConnect'
import Opcoes from './screens/Opcoes';
import Pilares from './screens/Pilares'
import EnvioDeDados from './screens/EnvioDeDados'
import Anotacoes from './screens/Anotacoes'
export default function Menu(){
  
  const [screen, setScreen] = useState(0)

  let history = useHistory();

  const logoff =() => {
    sessionStorage.removeItem("uuid")
    firebase
    .auth()
    .signOut()
    .then(()=>{
      history.push("/");
    })
    .catch(()=>{
      history.push("/");
    })
  }
  return(
    <body>
      <AppBar position="sticky" style={{backgroundColor: "transparent", color: "black"}}>
        <Toolbar>
          <Grid container spacing={1}>
            <Grid item sm={12} xs={12}>
              <Button>
                Opções
              </Button>
            </Grid>
          </Grid>
            <Button
              onClick={logoff}
              variant="contained"
              startIcon={<ExitToAppIcon/>}
              style={{color: "white", backgroundColor: "black"}}>
            <b>Logoff</b>
            </Button>
        </Toolbar>
      </AppBar>
      <div>
      <Grid container spacing={1}>
        <Grid item sm={3} xs={3}>
          <MenuList>
            <MenuItem onClick={()=> setScreen(0)}> Sobre a Consultoria</MenuItem>
            <MenuItem onClick={()=> setScreen(1)}> Nossos Pilares</MenuItem>
            <MenuItem onClick={()=> setScreen(2)}> Deixar Contato</MenuItem>
            <MenuItem onClick={()=> setScreen(3)}> Anotações</MenuItem>
          </MenuList>
        </Grid>
        <Grid item sm={12} xs={12}>
            {screen ==0 &&
            <>
            <Opcoes/>
            </>}
            {screen ==1 &&
            <>
            <Pilares/>
            </>}
            {screen ==2 &&
            <>
            <EnvioDeDados/>
            </>
            }
            {screen ==3 &&
            <>
            <Anotacoes/>
            </>
            }
        </Grid>
      </Grid>
      </div>
    </body>   
  )
}