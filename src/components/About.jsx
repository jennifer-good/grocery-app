import React from 'react';
import Header from './header';
import { Card, Container } from '@mui/material';

export default function About() {
  return (
<>
  <Container sx={{
    maxWidth: '6em',
  }}>
    <Header />
    <h1>About this game</h1>
    <Card sx={{
      padding: '2em',
      textAlign: 'left',
    }}>
      <p>
        This game is for a group of people who want to have fun and get to know each other more. 
        There are dares and questions, and is for 2 or more people who can handle getting a little silly, but not scandalous.
      </p>

      <p>
        If you are trying to party, it can also be a drinking game where the selected person 
        for each round drinks and/or chooses someone to drink.
      </p>
      <h2>How to get Started</h2>
      <ul>
        <li>Go back to the home screen at anytime by clicking the Logo</li>
        <li>From the home screen click "Play Game"</li>
        <li>You will be taken to a screen to enter all the player names and then start the actual game</li>
        <li>The next screen has the game. You will click the button displayed to start each round where one player 
          is randomly selected and they are given a random prompt</li>
        <li>Keep playing rounds as long as you like!</li>
      </ul>
    </Card>
  </Container>
</>
  );
}