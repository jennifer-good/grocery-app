import React, { useState } from 'react';
import { Button, Container, Box, Stack } from '@mui/material';
import Header from './header';
import Dietary from './preferences/dietary';
import NumberPeople from './preferences/number-people';
import Location from './preferences/location'; // Import the new Location component

export default function NewUser() {
  // State to hold the selected dietary preferences, number of people, and location
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [location, setLocation] = useState('');
  const [step, setStep] = useState(1);  // Step to control which component is shown

  // Function to handle dietary preferences update
  const handleDietarySelection = (preferences) => {
    setSelectedPreferences(preferences);
  };

  // Function to handle the number of people update
  const handleNumberOfPeopleChange = (numPeople) => {
    setNumberOfPeople(numPeople);
  };

  // Function to handle location change
  const handleLocationChange = (location) => {
    setLocation(location);
  };

  // Handle the Next button click
  const handleNext = () => {
    if (step === 1) {
      // Move to the next step (NumberPeople)
      setStep(2);
    } else if (step === 2) {
      // Move to the next step (Location)
      setStep(3);
    } else {
      // Do something with the collected data (e.g., submit it or store it)
      console.log("Dietary Preferences:", selectedPreferences);
      console.log("Number of People:", numberOfPeople);
      console.log("Location:", location);
    }
  };

  return (
    <div>
      <Header />
      <h2>Please answer a few quick questions</h2>
      
      {/* Conditionally render components based on step */}
      {step === 1 ? (
        <Dietary
          selectedPreferences={selectedPreferences}
          onDietaryChange={handleDietarySelection}
        />
      ) : step === 2 ? (
        <NumberPeople
          numberOfPeople={numberOfPeople}
          onNumberOfPeopleChange={handleNumberOfPeopleChange}
        />
      ) : (
        <Location
          location={location}
          onLocationChange={handleLocationChange}
        />
      )}

      {/* Main Content (Step-based rendering) */}
      <Container sx={{ paddingTop: '20px' }}>
        <Button variant="contained" onClick={handleNext}>
          {step === 1 ? 'Next' : step === 2 ? 'Next' : 'Submit'}
        </Button>
      </Container>

      {/* Footer with dynamic updates on new lines */}
      <Box
        sx={{
          position: 'fixed', // Fixed position at the bottom
          bottom: 0, // Align to the bottom of the screen
          left: 0, // Align to the left
          width: '100%', // Full width
          backgroundColor: 'background.paper', // Dark background
          color: 'white', // White text
          zIndex: 1000, // Ensure it's above other content
        }}
      >
        <h4>
            Selected Preferences: {selectedPreferences.length > 0 ? selectedPreferences.join(', ') : "None"}
        </h4>
        <h4>
            Number of People: {numberOfPeople ? numberOfPeople : "Not selected"}
        </h4>
        <h4>
            Location: {location || "Not selected"}
        </h4>
      </Box>
    </div>
  );
}
