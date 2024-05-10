import React, { useState } from 'react';

const PlayersForm = ({ addPlayer }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        if(e==""){
            alert("Name must be filled in");
            return false;
        }
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='player-input' value={userInput} type="text" onChange={handleChange} placeholder="Enter Name"/>
            <button className='player-button' >Add Player</button>
        </form>
    );
};

export default PlayersForm;