import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://backend-ip:3000");

function App() {
  const [players, setPlayers] = useState([]);
  const [bingoNumbers, setBingoNumbers] = useState([]);

  useEffect(() => {
    socket.on("updatePlayers", players => setPlayers(players));
    socket.on("newNumber", number => setBingoNumbers([...bingoNumbers, number]));
  }, [bingoNumbers]);

  return (
    <div>
      <h1>Bingo Game</h1>
      <h2>Players:</h2>
      <ul>{players.map(p => <li key={p.id}>{p.name}</li>)}</ul>
      <h2>Bingo Numbers:</h2>
      <p>{bingoNumbers.join(", ")}</p>
    </div>
  );
}

export default App;
