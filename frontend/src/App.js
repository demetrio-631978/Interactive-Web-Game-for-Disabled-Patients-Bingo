import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://backend-ip:3000");

function App() {
  const [players, setPlayers] = useState([]);
  const [bingoNumbers, setBingoNumbers] = useState([]);

  useEffect(() => {
    // Set up the socket listeners
    socket.on("updatePlayers", players => setPlayers(players));
    socket.on("newNumber", number => setBingoNumbers(prevNumbers => [...prevNumbers, number]));

    // Cleanup the socket connection when the component unmounts
    return () => {
      socket.off("updatePlayers");
      socket.off("newNumber");
    };
  }, [bingoNumbers]); // bingoNumbers dependency to ensure the socket listener updates

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
