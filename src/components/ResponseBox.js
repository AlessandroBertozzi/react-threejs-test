// ResponseBox.js
import React, { useState } from 'react';

function ResponseBox() {
    const [responseData, setResponseData] = useState(null);

    const handleButtonClick = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const data = await response.json();
            setResponseData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Send HTTP Request</button>
            {responseData && (
                <div>
                    <h3>Response Data:</h3>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default ResponseBox;
