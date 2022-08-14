const cors = require("cors");
const express = require("express"); // adv dynamic import
const postApi = require("./routes/posts");
const db = require("./shared/mongo");

const server = express();
console.log("in server");

let PORT = 5000;

(async () => {
  try {
    server.use(cors("*")); // * means all url could access this server
    server.use(express.json()); //string("{"names":"["muthu","mani"]"}") into json( {names:["muthu","mani"]} ) parsing
    await db.connect();

    server.get("/", (req, res) => {
      res.status(200).send("Server is running successfully");
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error_message: "server is not created",
    });
  }

  // posts routes
  server.use("/posts", postApi);

  //user routes
  server.use("/users", () => {});
  server.listen(PORT, () => {
    console.log("server is runnng at port", PORT);
  });
})(); // immediate invoked function execution
