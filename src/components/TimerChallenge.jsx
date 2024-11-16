import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

// let timer; Variable declared here timer, will be used with all

// One thing we could do is using multiple states for each component created for the timer

//components that it is the same time is used in multiple components
// it is not recommended to use the time here because consider you started
// one second timer and five second timer and stop the five second timer after
//one second this challenge is failed as both the components are using the same timer
export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  //   let timer;
  //Using the timer inside the function and outside the handle start and the handle stop solves
  // the issue of passing the timer from one function to other function, but As the state variables
  // are changed, the component execution starts again, so then the timer will never be stopped even
  // if there and stop Execute

  const timer = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handleStop() {
    // So how can we stop this timer that we started in a handle start?
    //  How are we specifically targeting the timer we started
    clearTimeout(timer.current);
  }

  return (
    <>
      {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : ""}>
          {timerStarted ? "Timer is running..." : "Time out..."}
        </p>
      </section>
    </>
  );
}
