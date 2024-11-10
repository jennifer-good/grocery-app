import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/header';
import './App.css'

//Homescreen of the game
function App() {
  
  return (
    <>
    <Header />
    <div className="vertical-center">
      <h1>Welcome to our app!</h1>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={'new-user'}><Button sx={{width:150}} variant="outlined">New User</Button></Link>
        <Link to={'about'}><Button sx={{width:150}} variant="outlined">Learn More</Button></Link>
      </Stack>
      </div>
    </>
  )
}

export default App
