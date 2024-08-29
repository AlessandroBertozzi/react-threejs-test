// App.js
import React, {useState} from 'react';
import NewThreadBox from './components/NewThreadBox';
import ModelCanvas from './components/ModelCanvas';
import MessageForm from "./components/ContinueThreadBox";

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
        <div style={{display: 'flex', height: '100vh'}}>
            <div style={{flex: 1, position: 'relative'}}>
                <ModelCanvas/>
            </div>
            <div style={{flex: 1, position: 'relative'}}>
                <NewThreadBox onThreadIdReceived={handleNewThread}/>
                {threadId && (
                    <MessageForm
                        threadId={threadId}
                        response={response}
                        setResponse={handleSetResponse}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
