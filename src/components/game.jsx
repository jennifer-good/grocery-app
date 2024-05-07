import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header.jsx'
import { Card, Button } from '@mui/material';

export default function Game() {
  const [randomPlayer, setRandomPlayer] = useState(null);
  const location = useLocation();
  const players = location.state?.players || [];
  const [myRound, setMyRound] = useState(1);

  const getRandomPlayer = () => {
    if (players.length > 0) {
      const randomIndex = Math.floor(Math.random() * players.length);
      setRandomPlayer(players[randomIndex]);
      setMyRound(myRound + 1);
    } else {
      console.log("No players available.");
    }
  };

  return (
    <>
      <Header />
      <Button onClick={getRandomPlayer}>Start Round {myRound}</Button>
      {randomPlayer && (
        <Card className='round-card'>
          <p>Name: {randomPlayer.name}</p>
        </Card>
      )}
    </>
  );
};

