import React, { Component } from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './Pags/Login'
import Menu from './Pags/Menu'
import Opcoes from './Pags/screens/Opcoes'

export default function App(){

  const PrivateRoute = ({ component: Component, ...rest })=> {
    return <Route
    render={(props=> {
      let isAuthenticated = sessionStorage.getItem("uuid")
      if (isAuthenticated) {
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
          
  </footer>
  
  </div>  )
}