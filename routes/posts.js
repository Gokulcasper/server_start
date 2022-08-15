const db = require("../shared/mongo");
const postApi = require("express").Router();

postApi.post("/", async (req, res) => {
  try {
    const postData = req.body;
    await db.g_posts.insertOne(postData);
    res.status(201).send({ Message: " Post Created Successfully " });
  } catch (error) {
    res.status(404).send({
      message: error.Message,
      error_message: "Post is Not Created",
    });
  }
});

postApi.get("/", async (req, res) => {
  try {
    const get_posts = await db.g_posts.find().toArray();
    res.status(200).send(get_posts);
  } catch (error) {
    res.status(404).send({
      message: error.Message,
      error_message: "Your Post willNot Get",
    });
  }
});

module.exports = postApi;
