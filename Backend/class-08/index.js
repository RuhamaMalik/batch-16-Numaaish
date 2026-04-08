const express = require("express");
const fs = require('fs');
const data = require('./data.json');
const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('', (req, res) => {
  res.send("Home");
});

//////////// REST FULL API's

app.get('/api/users', (req, res) => {
  res.json(data);
})


app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const user = data.find((user) => user.id === Number(id));
  res.json(user);
})


app.post('/api/users', (req, res) => {
  data.push({ ...req.body, id: data.length + 1 });
  fs.writeFile('data.json', JSON.stringify(data), (err, data) => {
    if (err) console.log(err);
    res.json({ message: 'User created succesfully!' })
  });
  // res.send(req.body);
});


///////////// update

app.patch('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const reqData = req.body;
  let user = data.find((user) => user.id === Number(id));

  // let obj = {
  //   namr:'abcd',
  //   hack:'',
  //   hasOwnProperty:()=>{}
  // }

  for (const key in reqData) {
    if (Object.prototype.hasOwnProperty.call(user, key)) {
      user = {
        ...user, [key]: reqData[key]
      }
    }
  }

  // let arr = [1, 2, 3];
  data[user.id - 1] = user;

  fs.writeFile('data.json', JSON.stringify(data), (err, data) => {
    return res.json({ message: 'User updated succssfully!',user });
  })

  // res.json(user);
})


app.listen(8000, () => console.log('Server is Running'));