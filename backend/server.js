const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) console.error("DB Connection Failed:", err);
  else console.log("MySQL Connected");
});

let players = [];
let bingoNumbers = [];

io.on("connection", socket => {
  socket.on("joinGame", playerName => {
    players.push({ id: socket.id, name: playerName });
    io.emit("updatePlayers", players);
  });

  socket.on("callNumber", () => {
    let number;
    do {
      number = Math.floor(Math.random() * 75) + 1;
    } while (bingoNumbers.includes(number));

    bingoNumbers.push(number);
    io.emit("newNumber", number);
  });

  socket.on("bingo", playerName => {
    io.emit("bingoWinner", playerName);
  });

  socket.on("disconnect", () => {
    players = players.filter(p => p.id !== socket.id);
    io.emit("updatePlayers", players);
  });
});

server.listen(3000, () => console.log("Server running on port 3000"));
