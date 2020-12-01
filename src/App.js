import React, {useLayoutEffect, useState} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './Pags/Login'
import Menu from './Pags/Menu'
import Opcoes from './Pags/screens/Opcoes'
import firebase from './services/FirebaseConnect'


export default function App(){

  const [user, setUser] = useState (null)

  useLayoutEffect(()=> {
    firebase
      .auth()
      .onAuthStateChanged(user => {
      if (user !== null) {
        setUser(user.uid)
      }else{
        setUser(null)
      }
    })
  }, [])

  const PrivateRoute = ({ component: Component, ...rest })=> {
    return <Route
    render={(props=> {
      if (user) {
        return <Component {...props}/>
      } else{
        return <Login/>
      }

    })}
    />
  }
  return(
    <div>
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Login}/>
        <PrivateRoute path="/menu" component={Menu}/>
        <PrivateRoute path="/opcoes" component={Opcoes}/>
      </Switch>
    </HashRouter>
  <footer>
          <div id="layout">
            Nome: Paulo Afonso Della Mêa dos Santos - Email: afonso.mea@gmail.com
          </div>
          <div id="layout">
          link GitHub: https://github.com/SadGitHubb/Class_Projects.git
          </div>
          
  </footer>
  
  </div>  )
}