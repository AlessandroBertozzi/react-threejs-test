// MessageForm.js
import React, { useState } from 'react';

function MessageForm({ threadId, response, setResponse }) {
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/response`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Workspace-API-Key': process.env.REACT_APP_API_KEY,
                },
                body: JSON.stringify({
                    threadId: threadId,
                    input: message,
                }),
            });

            const data = await response.json();
            setResponse(data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={handleInputChange}
                placeholder="Type your message here"
            />
            <button onClick={handleSendMessage} disabled={!threadId || !message}>
                Send Message
            </button>
            {response && (
                <div>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default MessageForm;
