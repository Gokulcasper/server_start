const express = require("express"); // adv dynamic import
const cors = require("cors");

const db = require("./shared/mongo");

const server = express();

let PORT = 5000;

(async () => {
  await db.connect();
  await server.use(express.json()); //string("{"names":"["muthu","mani"]"}") into json( {names:["muthu","mani"]} ) parsing

  server.use(cors("*")); // * means all url could access this server
  server.listen(PORT, () => {
    console.log("server is runnng at port", PORT);
  });
})(); // immediate invoked function execution
