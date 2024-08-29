// App.js
import React from 'react';
import ResponseBox from './components/ResponseBox';
import ModelCanvas from './components/ModelCanvas';

function App() {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: 1, position: 'relative' }}>
                <ModelCanvas />
            </div>
            <div style={{ flex: 1, padding: '20px' }}>
                <ResponseBox />
            </div>
        </div>
    );
}

export default App;
