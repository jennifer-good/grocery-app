import React from 'react';
import Card from '@mui/material/Card';

const Player = ({player}) => {
    return (
        <Card sx= {{
            margin: '.5em',
            backgroundColor: 'secondary.dark',
            fontSize: '18',
            maxWidth: '15em',
            padding: '.7em',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
        }}
        >
            {player.name}
        </Card>
    );
 };
  
 export default Player;