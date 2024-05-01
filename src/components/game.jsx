import React, { useState } from 'react';
import Header from './header';
import Players from './players';
import data from '../assets/data.json';
import PlayersForm from './players-form.jsx';
 
function Game() {
  const [ players, setPlayers ] = useState(data);

  const addPlayer = (userInput ) => {
    let copy = [...players];
    copy = [...copy, { id: players.length + 1, name: userInput, complete: false }];
    setPlayers(copy);
  }
 
  return (
    <>
    <Header />
    <h2>Game</h2>
    <Players players={players}/>
    <PlayersForm addPlayer={addPlayer}/>
    </>
  )
}

export default Game;