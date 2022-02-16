// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541// PORT number here,
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