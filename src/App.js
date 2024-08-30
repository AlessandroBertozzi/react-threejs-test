// App.js
import React, {useState} from 'react';
import NewThreadBox from './components/NewThreadBox';
import ModelCanvas from './components/ModelCanvas';
import MessageForm from "./components/ContinueThreadBox";
import UI from './components/UI';

function App() {

    const [threadId, setThreadId] = useState(null);
    const [response, setResponse] = useState(null);

    const handleNewThread = (newThreadId) => {
        setThreadId(newThreadId);
        setResponse(null); // Reset the response when a new thread is created
    };

    const handleSetResponse = (responseData) => {
        setResponse(responseData);
    };

    return (
        <div style={{display: 'flex', height: '100vh', backgroundImage: 'url(/Image/io-centers-2673324_1920.jpg)',backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'}}>
            
                <ModelCanvas/>
                <UI />
                <NewThreadBox onThreadIdReceived={handleNewThread}/>
                {threadId && (
                    <MessageForm
                        threadId={threadId}
                        response={response}
                        setResponse={handleSetResponse}
                    />
                )}
            
        </div>
    );
}

export default App;
