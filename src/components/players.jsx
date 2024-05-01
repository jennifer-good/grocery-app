import React from 'react';
import Player from './player.jsx'


const Players = ({players}) => {
  return (
      <div>
          {players.map(player => {
              return (
                  <Player player={player} />
              )
          })}
      </div>
  );
};

export default Players;