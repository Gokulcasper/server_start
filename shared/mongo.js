const { MongoClient } = require("mongodb"); // inside mongo db lot of funtion, class ,availble , we need here only MongoClient class;

const DB_URL =
  "mongodb+srv://<gokulcasper2506>:<Gokul@2506>@cluster0.074xc4g.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(DB_URL); // obj literals class to obj client.connect() ;
// Client used here two main function ,1.client.connect(); [ connect db with sever ("db url")]; 2.client.db() (for create db) ;

const mongo = {
  db: null,
  posts: null, // initially empty
  users: null,

  async connect() {
    await client.connect(); // db connect

    console.log("Db is connected successfully ");
    // create a new db using client obj's db();
    this.db = client.db("post_user_details"); // create new db ("Db name")
    // create collection using new db
    this.posts = this.db.collection("posts"); // creation of collection
    this.users = this.db.collection("users"); // creation of users collection here/ initially
  },
};
module.exports = mongo;
