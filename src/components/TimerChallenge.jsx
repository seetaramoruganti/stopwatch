import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

// let timer; Variable declared here timer, will be used with all

// One thing we could do is using multiple states for each component created for the timer

//components that it is the same time is used in multiple components
// it is not recommended to use the time here because consider you started
// one second timer and five second timer and stop the five second timer after
//one second this challenge is failed as both the components are using the same timer
export default function TimerChallenge({ title, targetTime }) {
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  // //   let timer;
  // //Using the timer inside the function and outside the handle start and the handle stop solves
  // // the issue of passing the timer from one function to other function, but As the state variables
  // // are changed, the component execution starts again, so then the timer will never be stopped even
  // // if there and stop Execute

  // const timer = useRef();
  // const dialog = useRef();

  // function handleStart() {
  //   timer.current = setTimeout(() => {
  //     setTimerExpired(true);
  //     dialog.current.open();
  //   }, targetTime * 1000);

  //   setTimerStarted(true);
  // }

  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
