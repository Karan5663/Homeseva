const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/homeseva');
  console.log('db connected');
}

const userSchema = new mongoose.Schema({
    username: String,
    Email: String,
    Password: String,
    phone: String
  });

  const User = mongoose.model('User', userSchema);

const server = express();

server.use(cors());
server.use(bodyparser.json());

server.post('/demo',async(req,res)=>{

    let user = new User();
    user.username = req.body.username;
    user.Email = req.body.Email;
    user.Password = req.body.Password;
    user.phone = req.body.phone;
  const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

server.post('/provider',async(req,res)=>{//new

  let pro = new User();
  pro.username = req.body.username;
  pro.Email = req.body.Email;
  pro.Password = req.body.Password;
  pro.phone = req.body.phone;
const doc = await pro.save();

  console.log(doc);
  res.json(doc);
})//new

server.get('/demo',async(req,res)=>{
  const docs = await User.find({});
  res.json(docs);

})

server.listen(8080,()=>{
    console.log('server started')
    
})
