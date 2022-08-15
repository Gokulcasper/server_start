const db = require('../shared/mongo');
const postApi = require("express").Router();

postApi.post("/", async (req, res) => {
  console.log("in Post")
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


postApi.get("/", async (req, res) => {
  console.log("in find all post")
  try {
    const all_post = await db.g_posts.find().toArray();
    res.status(200).send({ message: "Successfully Get all data", data: all_post });
  } catch (error) {
    res.status(404).send({
      message: error.message,
      error_message: "Error To Fetch Data"
    })
  }
})

module.exports = postApi