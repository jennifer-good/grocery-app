import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header.jsx'
import { Card, Button, Container } from '@mui/material';
import promptData from '../assets/test-data.jsx';

export default function Game() {
  const [randomPlayer, setRandomPlayer] = useState(null);
  const location = useLocation();
  const players = location.state?.players || [];
  const [myRound, setMyRound] = useState(1);

  const [randomPrompt, setRandomPrompt] = useState(null);

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

