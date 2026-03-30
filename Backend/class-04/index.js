const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('My Home Page')
});


app.get('/products', (req, res) => {
  const data =[ {title:"Shampoo", price:500},  {title:"soap", price:300}]
  // res.send(`Products Page : ${req.query.brand} `)
  res.json(data);
})


app.get('/*xyz',(req,res)=>{
   res.send(`404 PAGE `)
})





app.listen(8000, () => console.log('server is Running')
)