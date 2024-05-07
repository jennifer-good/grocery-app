import React from 'react';
import Player from './player.jsx';
import Container from '@mui/material/Container';


const Players = ({players}) => {
  return (
      <Container sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2em',
      }}
      >
          {players.map(player => {
              return (
                  <Player key={player.id} player={player} />
              )
          })}
      </Container>
  );
};

export default Players;