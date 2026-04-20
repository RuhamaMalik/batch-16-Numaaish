const { MongoClient } = require('mongodb');


const uri = "mongodb+srv://batch16:batch162026@cluster0.vnpmvkr.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);

const connectDb = async () => {
  await client.connect();
  console.log("DB Connected successfully to server");
  const database = client.db('e-com');

  return database;
}

module.exports =  connectDb;