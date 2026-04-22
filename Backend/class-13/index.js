const express = require('express');
const mongoose = require('mongoose');
require('./config/config');
const app = express();

///////// Middleware
app.use(express.json());

/// DB connection

////////// Schema

////////// Model


////////// Routes

app.post('/api/employ',)

//////////// MVC 

app.get('', (req, res) => {
  res.send("Home Page")
});

app.listen(8000, () => console.log("Server is Running"))