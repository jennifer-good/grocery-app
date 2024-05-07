import React, { useState } from 'react';
import { Card } from '@mui/material';

function Prompt({ players }) {
  return (
    <div>
        <Card>
          <h3>Randomly Selected Player:</h3>
          <p>Name: {players.name}</p>
        </Card>
    </div>
  );
}

export default Prompt;
