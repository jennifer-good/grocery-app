import React, { useState } from 'react';

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
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter name..."/>
            <button>Submit</button>
        </form>
    );
};

export default PlayersForm;