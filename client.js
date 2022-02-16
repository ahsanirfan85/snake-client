// establishes a connection with the game server
const { IP, PORT } = require("./constants");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection to game server successfully established.");
    conn.write("Name: AIM");
    // setTimeout(() => {
    //   conn.write("Move: up");
    //   setTimeout(() => {
    //     conn.write("Move: right");
    //   }, 1000);
    // }, 1000);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });

  conn.on("data", (messageFromServer) => {
    console.log(messageFromServer);
  });

  return conn;
};

module.exports = { connect };