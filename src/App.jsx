import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './App.css'

function App() {
  
  return (
    <>
      <h1>Cootie Catcher</h1>
      <Box sx={{p:1}}>
        <Button sx={{width:150}}
          variant="contained">Let's PLay!</Button>
      </Box>
      <Box sx={{p:1}}>
        <Button sx={{width:150}}
        variant="outlined">Learn More</Button>
      </Box>
    </>
  )
}

export default App
