import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import PlayersForm from './players-form';
import Players from './players';

function AddPlayers() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();
  
    const addPlayer = (userInput) => {
        if (validateName(userInput)) {
          let copy = [...players];
          copy = [...copy, { id: players.length + 1, name: userInput, complete: false }];
          setPlayers(copy);
        } else {
          alert("Please enter a valid name.");
        }
    };

    const validateName = (name) => {
        // Regular expression to check if the name contains only letters or spaces
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name.trim()) && name.trim().length > 0;
    };
  
    const startGame = () => {
      // Navigate to the game route and pass the players array as state
      navigate('/game', { state: { players: players } });
    };
  
    return (
      <>
        <Header />
        <h2>Who is playing?</h2>
        <PlayersForm addPlayer={addPlayer} />
        <Players players={players} />
        <button className='game-button' onClick={startGame}>Start Game</button>
      </>
    );
  }
  
  export default AddPlayers;