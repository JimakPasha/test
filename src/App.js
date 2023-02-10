import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(5);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
      setSeconds(5);
    }
  }, [seconds, timerActive]);

  return (
    <div className="app">
      <div className="field">
        <div className="block action-square">1</div>
        <div className="ball action-ball"></div>
        <div className="block">2</div>
      </div>
      <button
        className="btn"
        onClick={() => setTimerActive(!timerActive)}
        disabled={timerActive}
      >
        {timerActive ? seconds : 'start'}
      </button>
    </div>
  );
}

export default App;
