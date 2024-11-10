import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';

export default function Dietary({ selectedPreferences, onDietaryChange }) {

    // Function to handle box selection
    const handleBoxClick = (boxName) => {
      if (selectedPreferences.includes(boxName)) {
        // If it's selected, remove it from the list
        onDietaryChange(selectedPreferences.filter(item => item !== boxName));
      } else {
        // If it's not selected, add it to the list
        onDietaryChange([...selectedPreferences, boxName]);
      }
    };

  // Function to style the boxes dynamically based on selection
  const boxStyle = (boxName) => ({
    height: 50,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: selectedPreferences.includes(boxName) ? '#b3e0ff' : '#f5f5f5', // Highlight selected box
    cursor: 'pointer',
    borderRadius: 8,
    fontWeight: 'bold',
    color: 'black'
  });

  return (
    <div>
      <h3>Do you have any dietary preferences?</h3>

      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
        <Box sx={boxStyle('Vegan')} onClick={() => handleBoxClick('Vegan')}>
          Vegan
        </Box>
        <Box sx={boxStyle('Vegetarian')} onClick={() => handleBoxClick('Vegetarian')}>
          Vegetarian
        </Box>
      </Stack>
        <br />
      <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
        <Box sx={boxStyle('Gluten Free')} onClick={() => handleBoxClick('Gluten Free')}>
          Gluten Free
        </Box>
        <Box sx={boxStyle('Protein Focused')} onClick={() => handleBoxClick('Protein Focused')}>
          Protein Focused
        </Box>
      </Stack>

    </div>
  );
}
