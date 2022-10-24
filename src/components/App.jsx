import React, { useState } from "react";

let startTimer = false;

function App() {
  const [start, currentTime] = useState("TIME");

  function timeNow() {
    let time = new Date().toLocaleTimeString();
    console.log(time);
    currentTime(time);
    startTimer = true;
  }

  startTimer && setInterval(timeNow, 1000);

  return (
    <div className="container">
      <h1>{start}</h1>
      <button onClick={timeNow}>Get Time</button>
    </div>
  );
}

export default App;
