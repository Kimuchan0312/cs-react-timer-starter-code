import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);

  const isStart = useRef(false);
  const active = useRef(null);
  const refInterval = useRef(null);

  const startTimer = () => {
    if (!isStart.current) {
      isStart.current = true;
      active.current = true;
      refInterval.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };
  const stopTimer = () => {
    if (isStart.current) {
      clearInterval(refInterval.current);
      isStart.current = false;
      active.current = false;
    }
  };
  const resetTimer = () => {
    clearInterval(refInterval.current);
    isStart.current = false;
    active.current = false;
    setTime(ini);
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
