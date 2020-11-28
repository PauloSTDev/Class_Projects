import './App.css';

import React from 'react'
import {
  Button,
  Toolbar,
  Typography,
  IconButton
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
function App() {
  return (
    <div>
    <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">
      Menu
    </Typography>
    <Button color="inherit">Login</Button>
    </Toolbar>
  </div>
);
}

export default App;
