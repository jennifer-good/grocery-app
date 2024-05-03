import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React from 'react';
import Logo from './assets/cootie-logo.svg';
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  
  return (
    <>
    <div className="vertical-center">
      <img src={Logo} alt="Logo" className="logo-home"/>
      <h1>Cootie Catcher</h1>
      <Box sx={{p:1}}>
        <Link to={'add-players'}><Button sx={{width:150}} variant="contained">Play Game</Button></Link>
      </Box>
      <Box sx={{p:1}}>
        <Link to={'about'}><Button sx={{width:150}} variant="outlined">Learn More</Button></Link>
      </Box>
      </div>
    </>
  )
}

export default App
