import React from 'react';
import Card from '@mui/material/Card';

const Player = ({player}) => {
    return (
        <Card>
            {player.name}
        </Card>
    );
 };
  
 export default Player;