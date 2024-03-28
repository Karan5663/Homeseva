const express = require('express');
const cors = require('cors');
const mongoose =require('mongoose');
const bodyparser = require('body-parser');
const server = express();

main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/HomeSeva');
    console.log('db connected')
}

const HomeSeva = new mongoose.Schema({
    username: String,
    Email:String,
    Password: String,
    phone: String
  });

const User = mongoose.model('user', HomeSeva);  

server.use(cors());
server.use(bodyparser.json());

server.post('/demo',async (req,res)=>{
    let user = new User();
    user.username = req.body.username;
    user.Email= req.body.Email;
    user.Password = req.body.Password;
    user.phone= req.body.phone;
    
    
    const doc = await user.save();
    console.log(req.body)
    res.json(req.body);
})

server.listen(8080,()=>{
    console.log('server started')
    
})
