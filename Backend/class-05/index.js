// const express = require('express');
// const products = require('./data');
// const path = require('path');
// const app = express();

// const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath));

// app.get('', (req, res) => {
//   // res.send(`
//   //   <h1>Class # 05</h1> 
//   //   <p>JavaScript (JS) is a lightweight, interpreted programming language used primarily to create dynamic, interactive web pages.</p>
//   //   `);

//   res.sendFile(`${publicPath}/html/index.html`);

// });

// app.get('/about', (req,res)=>{
// res.sendFile(`${publicPath}/html/about.html`);
// })

// /// SSR CSR

// app.get('/products', (req, res) => {
//   // db query
//   res.send(products);
// });

// app.listen(8000, () => console.log('Server is Running')
// );



////////////////////// ejs (embedded Js)

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('', (req, res) => {
  res.send('hello pagal');
});


app.get('/profile', (req, res) => {
  const user = {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1G2__eNaHy8wkEB5UZRIiXsNBXGcw3Nscw&s",
    name: "Ruhama Gull Malik",
    email: "ruhama@gmail.com",
    contact: "+923162446746",
    Address: "SMIT, Numaaish Campus.",
    experience:1,
    skills:["sleeping","working","patience"]
  }
  res.render('profile', { user });
}) 





app.listen(8000, () => console.log('Server is Runnng'));
