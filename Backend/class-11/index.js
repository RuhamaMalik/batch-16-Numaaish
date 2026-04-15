const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('Home');
});


app.post('/api/profile', (req, res) => {
  res.set('Content-Type', 'application/json')
  res.set('X-Country', 'Pakistan')
  res.set('X-Language', 'Urdu')
  res.send('Home');
});

/////////// frontend code
// fetch('',{
//  method:'POST',
//  headers:{
//    'Authorization':'Bearer msds,dm,sdm,s',
//    "Content-Type":'application/json'
//  }
// })

// axios.post('dfdf',(req,res)=>{
// req.headers.authorization
// })

/////////////////// API status code

// 200 ----- success
// 201 ----- data created successfully
// 204 ----- data nahi mila

// 301 ---- permanant redirection
// 302 ---- Temporary redirection

// 400 ---- Bad request | Data galat send kia hai
// 401 ---- UnAuthorized | Login nahi hai
// 403 ---- Access Denied
// 404 ---- Resource nahi mile

// 500 ---- Internal Server Error
// 503 ---- Service Unavailable


app.get('/api/courses', (req, res) => {
  res.status(204).json({});
})

// app.post('/api/users', (req, res) => {
//   const { pswd, email, name, destination } = req.body;
//   if (!pswd || !email) {
//     res.status(400).json({ message: 'Missing Required fields' });
//   }
//   res.status(204).json({});
// })


app.listen(8000, () => console.log("Server is Running"));