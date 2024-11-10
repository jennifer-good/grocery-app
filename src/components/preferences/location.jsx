import React from 'react';
import { Container, TextField, Stack } from '@mui/material';

export default function Location({ location, onLocationChange }) {
  const handleLocationChange = (event) => {
    onLocationChange(event.target.value);
  };

  return (
    <div>
      <h3>Where are you located?</h3>
        <Container>
          <TextField
            label="Location (e.g., City, Zip Code)"
            value={location || ''}
            onChange={handleLocationChange}
            fullWidth
          />
        </Container>
    </div>
  );
}
