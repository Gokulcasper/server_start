const db = require('../shared/mongo');
const postApi = require("express").Router();

postApi.post("/", async (req, res) => {
  try {
    const post_data = req.body;
    await db.g_posts.insertOne(post_data);
    res.status(201).send({ message: "your post created successfully" })
  } catch (error) {
    res.status(404).send({
      message: error.message,
      error_message: "post is not created"
    })
  }
})

module.exports = postApi