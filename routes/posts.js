const db = require("../shared/mongo");

const postApi = require("express").Router();

//create  new post :

// front end axios req
// const [state, setState] = useState({
//   title: "",
//   description: "",
//   location: "",
// });
// const createNewPost = async() => {
//   let create_post=await axios.post("http://localhost:5000/posts",state);
//   console.log(create_post.data.message);
//  }

postApi.post("/", async (req, res) => {
  console.log("create post requested");
  try {
    let postData = req.body;

    console.log("post data:", postData);
    await db.posts.insertOne({ postData });
    res.status(201).send({ message: "post created successfully" });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      error_message: "Post is not created.",
    });
  }
});

// const [allPosts, setAllPosts] = useState([]);
// get axios req
// const getAllPosts =async () => {
//   let all_posts=await axios.get("http://localhost:5000/posts");
//   setAllPosts(allPosts.data);
//  }

// get all posts route;

postApi.get("/", async (req, res) => {
  try {
    const all_posts = await db.posts.find().toArray(); //[{},{}]
    res.status(200).send(all_posts);
  } catch (error) {
    res.status().send({
      message: error.message,
      error_message: "not success",
    });
  }
});

// get single post using id;

// postApi.get();

module.exports = postApi;
