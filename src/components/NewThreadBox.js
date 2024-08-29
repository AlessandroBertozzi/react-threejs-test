// NewThreadBox.js
import React from 'react';

function NewThreadBox({ onThreadIdReceived }) {
    const handleCreateThread = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/new-thread`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Workspace-API-Key': process.env.REACT_APP_API_KEY,
                },
            });

            const data = await response.json();
            const { threadId } = data;
            onThreadIdReceived(threadId);
        } catch (error) {
            console.error('Error creating new thread:', error);
        }
    };

    return (
        <div>
            <button onClick={handleCreateThread}>Create New Thread</button>
        </div>
    );
}

export default NewThreadBox;
