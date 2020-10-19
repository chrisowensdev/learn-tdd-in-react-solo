import React, { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const handleTextChange = event => {
        setInputText(event.target.value);
    }

    const handleSend = () => {
        onSend(inputText);
        setInputText('');
    }

    return (
        <div>
            <input type="text" data-testid="messageText" onChange={handleTextChange} value={inputText}/>
            <button data-testid="sendButton" onClick={handleSend}>Send</button>
        </div>
    );
};

export default NewMessageForm;