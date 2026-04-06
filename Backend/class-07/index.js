const express = require("express");
const data = require('./data.json');
const app = express();

app.use(express.urlencoded({extended:false}));

app.get('', (req, res) => {
  res.send("Home");
});

//////////// REST FULL API's

// app.get('/users', (req, res) => {
//   const html = data.map((user,i) => {
//        return `
//        <h3>${user.first_name} ${user.last_name}</h3>
//         <p>${user.email}</p>
//        <hr>
//        `
//   }).join("");

//   res.send(html);
// });


app.get('/api/users', (req, res) => {
  res.json(data);
});

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const user = data.find((user) => user.id === Number(id));
  res.json(user);
})


app.post('/api/users',(req,res)=>{
console.log(req.body);
res.send("hello")
})

app.listen(8000, () => console.log('Server is Running'));