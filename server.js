const cors = require("cors");
const express = require("express");
const postApi = require("./routes/posts");
const db = require("./shared/mongo");

const server = express();

let PORT = 5000;

// (async()=>{     immediate invoke function
// })()

(async () => {
  try {
    server.use(cors("*")); // Access all url
    server.use(express.json()); //string ("{"names":"["muthu","gokul"]"}") => JSON ({name:["muthu","gokul"]})
    server.get("/", (req, res) => {
      res.status(200).send("server is Running Successfully");
    });

    await db.connect();

    server.use("/posts", postApi); //

    server.listen(PORT, () => {
      console.log("server is running at port", PORT);
    });
  } catch (error) {
    console.log("Error:", error.message)
  }
})();
