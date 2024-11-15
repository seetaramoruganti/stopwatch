import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setPlayerName] = useState(null);
  const [isSubmitted, setsubmitted] = useState(false);

  function handleChange(event) {
    setsubmitted(false);
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setsubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {isSubmitted ? enteredPlayerName : "Unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
