const { MongoClient } = require("mongodb"); // inside mango db have many class & function. we need only MongoClient class
const DB_URL = "mongodb+srv://GokulCasper:Gokul_2506@gokulcaper.lr72vn2.mongodb.net/?retryWrites=true&w=majority";
// "mongodb+srv://muthu:muthu123@cluster1.q9tm6.mongodb.net/gokul_posts?retryWrites=true&w=majority";
const DB_NAME = "gokul_posts";

const client = new MongoClient(DB_URL); // obj literals
// Here, client using maily two functions are,
// 1. client.connect() => connect db with server
// 2. client.db() => for create db

const mongo = {
  db: null,
  g_posts: null, // collections // initially empty

  async connect() {
    await client.connect(); // connect db with server
    this.db = client.db(DB_NAME); // create new DB ("DB name")
    // create collection using new db
    this.g_posts = this.db.collection("g_posts"); // create collection in g_post
    console.log("DB is Connected");
  },
};
module.exports = mongo;
