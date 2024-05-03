import React, { useState } from 'react';
import Header from './header';
import Players from './players';
import PlayersForm from './players-form.jsx';
import { Link } from 'react-router-dom';
 
function AddPlayers() {
  const [ players, setPlayers ] = useState([]);

  const addPlayer = (userInput ) => {
    let copy = [...players];
    copy = [...copy, { id: players.length + 1, name: userInput, complete: false }];
    setPlayers(copy);
  }
 
  return (
    <>
    <Header />
    <h2>Game</h2>
    <PlayersForm addPlayer={addPlayer}/>
    <Players players={players}/>
    <Link to={'/game'}><button className='game-button'>Start Game</button></Link>
    </>
  )
}

export default AddPlayers;