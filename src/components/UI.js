import React from 'react';
import './UI.css';


const UI = () => {
  return (
    <div className="ui-container">
      <h1 className="ui-title">Benvenuto nella nostra applicazione!</h1>
      <button className="ui-button"> <img src={`/Image/voice.png`} alt="icon" className="button-icon" /></button>
    </div>
  );
};

export default UI;