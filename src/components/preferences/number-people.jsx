import React from 'react';
import { Box, Stack } from '@mui/material';

export default function NumberPeople({ numberOfPeople, onNumberOfPeopleChange }) {
  // Function to handle box selection for the number of people
  const handleBoxClick = (numPeople) => {
    onNumberOfPeopleChange(numPeople); // Update the number of people in parent
  };

  // Styling for each selection box
  const boxStyle = (numPeopleOption) => ({
    height: 50,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: numberOfPeople === numPeopleOption ? '#b3e0ff' : '#f5f5f5', // Highlight selected box
    cursor: 'pointer',
    borderRadius: 8,
    fontWeight: 'bold',
    color: 'black',
    transition: 'background-color 0.3s ease' // Smooth transition for background color change
  });

  return (
    <div>
      <h3>How many people are you shopping for?</h3>

      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
        <Box sx={boxStyle('One Person')} onClick={() => handleBoxClick('One Person')}>
          One Person
        </Box>
        <Box sx={boxStyle('Two People')} onClick={() => handleBoxClick('Two People')}>
          Two People
        </Box>
      </Stack>
      <br />
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
        <Box sx={boxStyle('Three to Five')} onClick={() => handleBoxClick('Three to Five')}>
          Three to Five
        </Box>
        <Box sx={boxStyle('More than Six')} onClick={() => handleBoxClick('More than Six')}>
          More than Six
        </Box>
      </Stack>
    </div>
  );
}
