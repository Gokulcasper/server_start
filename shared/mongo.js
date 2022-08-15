const { MongoClient } = require("mongodb"); // inside mongo db lot of funtion, class ,availble , we need here only MongoClient class;
const DB_URL =
  "mongodb+srv://muthu:muthu123@cluster1.q9tm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const DB_NAME = "posts_users";

const client = new MongoClient(DB_URL); // obj literals class to obj client.connect() ;
// Client used here two main function ,1.client.connect(); [ connect db with sever ()]; 2.client.db() (for create db) ;

const mongo = {
  db: null,
  posts: null, // initially empty
  users: null,

  async connect() {
    console.log("in db");
    await client.connect(); // db connect
    // create a new db using client obj's db();
    this.db = client.db(DB_NAME); // create new db ("Db name")
    // create collection using new db
    this.posts = this.db.collection("posts"); // creation of collection
    this.users = this.db.collection("users"); // creation of users collection here/ initially
    console.log("Db is connected successfully ");
  },
};
module.exports = mongo;
