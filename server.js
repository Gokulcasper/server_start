const cors = require("cors");
const express = require("express");
const { g_posts } = require("./shared/mongo");
const db = require("./shared/mongo");

const server = express();

let PORT = 5000;

async () => {
  try {
    server.use(cros("*"));
    server.use(express.json());
    await db.connect();
    server.get("/", (req, res) => {
      res.status(201).send("server is Running Successfully");
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error_message: "Server is not created",
    });
  }

  server.use("/g_posts", g_posts);

  server.listen(PORT, () => {
    console.log("server is running at port", PORT);
  });
};
