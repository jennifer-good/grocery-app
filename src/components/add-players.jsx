import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import PlayersForm from './players-form';
import Players from './players';

//main page function for the add players screen
function AddPlayers() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();
  //takes the input and adds the player to the array
    const addPlayer = (userInput) => {
        if (validateName(userInput)) {
          let copy = [...players];
          copy = [...copy, { id: players.length + 1, name: userInput, complete: false }];
          setPlayers(copy);
        } else {
          alert("Please enter a valid name.");
        }
    };
//checks that the input is only letters or spaces and not empty
    const validateName = (name) => {
        // Regular expression to check if the name contains only letters or spaces
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name.trim()) && name.trim().length > 0;
    };
  //go from adding players to the next screen and start the game
    const startGame = () => {
      // Navigate to the game route and pass the players array as state
      navigate('/game', { state: { players: players } });
    };
  //return all the elements including the main header, input area, area to state players, and then the button to start the game
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