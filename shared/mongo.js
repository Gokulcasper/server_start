const { MongoClient } = require("mongodb");
const DB_URL =
  "mongodb+srv://muthu:muthu123@cluster1.q9tm6.mongodb.net/gokul_posts?retryWrites=true&w=majority";
const DB_NAME = "gokul_posts";

const client = new MongoClient(DB_URL);

const mongo = {
  db: null,
  g_posts: null,

  async connect() {
    await client.connect();
    this.db = client.db(DB_NAME);
    this.g_posts = this.db.collection("g_posts");
    console.log("DB is Connected");
  },
};
module.exports = mongo;
