import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './App.css'

function App() {
  
  return (
    <>
    <Container className="vertical-center">
      <h1>Cootie Catcher</h1>
      <Box sx={{p:1}}>
        <Button sx={{width:150}}
          variant="contained">Play Game</Button>
      </Box>
      <Box sx={{p:1}}>
        <Button sx={{width:150}}
        variant="outlined">Learn More</Button>
      </Box>
      </Container>
    </>
  )
}

export default App
