import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

const PlayersForm = ({ addPlayer }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input value={userInput} type="text" onChange={handleChange} placeholder="Enter Name"/>
            <Button variant="contained" className="player-button">Add Player</Button>
        </form>
    );
};

export default PlayersForm;