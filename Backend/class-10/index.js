const express = require('express');
const {checkAge, gender,checkCountry} = require('./middleware');
const app = express();

/////////// middleware



app.use(checkAge); // application level middleware
// app.use(gender);
// app.use(checkCountry);

app.get('', (req, res) => {
  res.send('Home');
});



app.get('/products', (req, res) => {
  res.send('Home');
});

app.get('/orders',checkCountry, gender, (req, res) => {
  res.send('Orders');
});


app.listen(8000, () => console.log("Server is Running"));