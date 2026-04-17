const { MongoClient } = require('mongodb');


const uri = "mongodb+srv://hafizaaqeela:hafizaaqeela2026@cluster0.zlat2hl.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);

const connectDb = async () => {
  await client.connect();
  console.log("Connected successfully to server");
  const database = client.db('myDatabase');

  return database;
}

module.exports =  connectDb;