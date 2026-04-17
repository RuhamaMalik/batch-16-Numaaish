// const { MongoClient } = require("mongodb");

// const url = 'mongodb+srv://hafizaaqeela:hafizaaqeela2026@cluster0.zlat2hl.mongodb.net/?appName=Cluster0';


// const client = new MongoClient(url);

// const checkDb = async () => {
//  try {
//    const db = await client.connect('e-store');
//   const userRef = db.collection('users');
//   const result = await userRef.insertOne({
//     name: 'Yusra',
//     email: 'yusra@gmail.com',
//     role: 'user'
//   })

//   console.log(result);
//  } catch (error) {
//   console.log(error);

//  }

// }

// checkDb();





const db = require('./db');



const checkDb = async () => {
  try {

    const userRef = (await db()).collection('users');

    const result = await userRef.insertOne({
      name: 'Ayesha',
      email: 'ayesha@gmail.com',
      role: 'user'
    })

    console.log(result);

  } catch (err) {
    console.log(err);

  } 
}
checkDb()
