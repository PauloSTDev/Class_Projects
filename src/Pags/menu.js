import React, { useState} from 'react'
import {
  AppBar,
  Grid,
  Toolbar,
  Button,
  MenuList,
  MenuItem
  
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useHistory} from 'react-router-dom'
import firebase from '../services/FirebaseConnect'
import Opcoes from './screens/Opcoes';
import Pilares from './screens/Pilares'
import Contato from './screens/Contato'
import Registros from './screens/Registros'
import Recados from './screens/Recados'
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
            <MenuItem onClick={()=> setScreen(3)}> Registros</MenuItem>
            <MenuItem onClick={()=> setScreen(4)}> Recados</MenuItem>
          </MenuList>
        </Grid>
        <Grid item sm={12} xs={12}>
            {screen ===0 &&
            <>
            <Opcoes setScreen={setScreen}/>
            </>}
            {screen ===1 &&
            <>
            <Pilares setScreen={setScreen}/>
            </>}
            {screen ===2 &&
            <>
            <Contato setScreen={setScreen}/>
            </>
            }
            {screen ===3 &&
            <>
            <Registros setScreen={setScreen}/>
            </>
            }
            {screen ===4 &&
            <>
            <Recados setScreen={setScreen}/>
            </>
            }
        </Grid>
      </Grid>
      </div>
    </body>   
  )
}