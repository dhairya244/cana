const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb://localhost:27017';
const dbName = 'ecommerce';
let usersCollection;
let purchasesCollection;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  const db = client.db(dbName);
  usersCollection = db.collection('users');
  purchasesCollection = db.collection('purchases');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  usersCollection.insertOne({ username, password }, (err, result) => {
    if (err) throw err;
    res.send('Registration successful');
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  usersCollection.findOne({ username, password }, (err, user) => {
    if (err) throw err;
    if (user) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.post('/purchase', (req, res) => {
  const { username, item } = req.body;
  purchasesCollection.insertOne({ username, item }, (err, result) => {
    if (err) throw err;
    res.send('Purchase successful');
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
