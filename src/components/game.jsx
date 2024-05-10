import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header.jsx'
import { Card, Button, Container } from '@mui/material';
import promptData from './test-data.jsx';
import SpriteAnimation from './animation/sprite-animation.jsx';

//main page for game to display the chosen player and prompt per game
export default function Game() {
  //set variables for selecting a random player
  const [randomPlayer, setRandomPlayer] = useState(null);
  const location = useLocation();
  const players = location.state?.players || [];
  
  //variable to keep track of the round
  const [myRound, setMyRound] = useState(1);

  //set variables to get random prompt
  const [randomPrompt, setRandomPrompt] = useState(null);

  //function to get random player and random prompt or return error if no players
  const getRandomPlayerPrompt = () => {
    if (players.length > 0) {
      const randomIndex = Math.floor(Math.random() * players.length);
      const randomPrompt = Math.floor(Math.random() * promptData.length);
      setRandomPrompt(promptData[randomPrompt]);
      setRandomPlayer(players[randomIndex]);
      setMyRound(myRound + 1);
    } else {
      console.log("No players available.");
    }
  };


  return (
    <>
      <Header />
      <Button variant='outlined' onClick={getRandomPlayerPrompt}>Start Round {myRound}</Button>
      <Container sx={{
        padding:'1em',
      }}>
        <SpriteAnimation />
        {randomPlayer && (
          <Card>
            <p>Player: {randomPlayer.name}</p>
            {randomPrompt && <p>{randomPrompt}</p>}
          </Card>
        )}
      </Container>
    </>
  );
};

