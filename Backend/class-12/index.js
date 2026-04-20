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





// const db = require('./db');



// const checkDb = async () => {
//   try {

//     const userRef = (await db()).collection('users');

//     const result = await userRef.insertOne({
//       name: 'Ayesha',
//       email: 'ayesha@gmail.com',
//       role: 'user'
//     })

//     console.log(result);

//   } catch (err) {
//     console.log(err);

//   } 
// }
// checkDb()


/////////////////// create


const express = require('express');
const db = require('./db');
const { ObjectId } = require('mongodb');
const app = express();

app.use(express.json());

app.get('', (req, res) => {
  res.send('Home')
});

//////////// create product

app.post('/api/products', async (req, res) => {
  try {
    const productRef = (await db()).collection('products');
    const result = await productRef.insertOne(req.body);
    // const result = await productRef.insertMany(req.body);

    if (result.acknowledged) {
      res.status(201).send({ message: "Product created!" })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "ERROR in Product" })
  }
});

//////////// get all products

app.get('/api/products', async (req, res) => {
  const productRef = (await db()).collection('products');
  const data = await productRef.find().toArray();
  res.status(200).json({ message: "Products get successfully!", data })
})

//////////  update product

app.patch('/api/products/:title', async (req, res) => {
  const productRef = (await db()).collection('products');
  const result = await productRef.updateOne(
    { title: req.params.title },
    {
      $set: req.body
    });

  res.json({ message: "product updated", result });
})


//////////  delete product

app.delete('/api/products/:id', async (req, res) => {
  const productRef = (await db()).collection('products');
 const result= productRef.deleteOne(
    { _id: new ObjectId(req.params.id) }
  );

  res.json({message:'Prduct deleted',result})
})

app.listen(8000, () => console.log('Server is Running'));