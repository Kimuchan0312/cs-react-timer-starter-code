import React from "react";
import useTimer from "./useTimer";
import { formatTime } from "./formatTime";

function App() {
  const { time, startTimer, stopTimer, resetTimer, active } = useTimer(0);
  const displayFormattedTime = (time) => {
    const formattedTime = formatTime(time);
    const [hours, minutes, seconds] = formattedTime.split(' : ');

    return `${hours.padStart(2, '0')} : ${minutes.padStart(2, '0')} : ${seconds.padStart(2, '0')}`;
  };

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{displayFormattedTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button
            className="button"
            ref={active}
            onClick={startTimer}
          >
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
