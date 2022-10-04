const mongoose = require('mongoose');

const mongo_url = `mongodb+srv://sachin:12345@cluster0.o4hbbxz.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongo_url);

const db = mongoose.connection;

db.once('error', (error) => {
  console.log('error in connectiong to db');
});

db.once('open', () => {
  console.log('connected to db');
});

module.exports = db;
