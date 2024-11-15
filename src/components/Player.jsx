import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setPlayerName] = useState(null);

  function handleChange(event) {
    setPlayerName(event.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button>Set Name</button>
      </p>
    </section>
  );
}
