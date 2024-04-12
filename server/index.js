const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


const server = express();
main().catch(err => console.log(err));
// 
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/homeseva');
  console.log('db connected');
}
// 
const userSchema = new mongoose.Schema({
    username: String,
    Email: String,
    Password: String,
    phone: String
  });
// 
  const User = mongoose.model('User', userSchema);
// 
const providerSchema = new mongoose.Schema({
    username: String,
    work: String,
    location: String,
    phoneNo: String
});
// 
const Provider = mongoose.model('Provider', providerSchema);
// 
// 
server.use(cors());
server.use(bodyparser.json());


// 
server.post('/demo',async(req,res)=>{
 try{
    let user = new User();
    user.username = req.body.username;
    user.Email = req.body.Email;
    user.Password = req.body.Password;
    user.phone = req.body.phone;
  const doc = await user.save();
 
// 
    console.log(doc);
    res.json(doc);
} catch (error) {
    console.error(error);
    res.json({ error: 'Internal server error' });
}
});
// 
server.post('/postService',async(req,res)=>{
    try{
       let provider = new Provider();
       provider.username = req.body.username;
       provider.work = req.body.work;
       provider.location = req.body.location;
       provider.phoneNo = req.body.phoneNo;
     const doc = await provider.save();
    
//    
       console.log(doc);
       res.json(doc);
   } catch (error) {
       console.error(error);
       res.json({ error: 'Internal server error' });
   }
   });
//    

// 
server.get('/demo',async(req,res)=>{
    try{
  const docs = await User.find({});
  res.json(docs);
} catch (error) {
    console.error(error);
    res.jsonjson({ error: 'Internal server error' });
}
// 
});
// 
server.get('/getProviders', async (req, res) => {
    try {
        const provider = await Provider.find({});
        res.json(provider);
    } catch (error) {
        console.error(error);
        res.json({ error: 'Internal server error' });
    }
});


// 
server.listen(8080,()=>{
    console.log('server started')
    // 
})

/************************************************/

// 
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// 
// const app = express();
// 
// main().catch(err => console.log(err));
// 
// async function main() {
//    await mongoose.connect('mongodb://127.0.0.1:27017/homeseva');
//    console.log('db connected');
// }
// 
// const userSchema = new mongoose.Schema({
//    username: String,
//    Email: String,
//    Password: String,
//    phone: String
// });
// 
// const User = mongoose.model('User', userSchema);
// 
// const providerSchema = new mongoose.Schema({
//    username: String,
//    work: String,
//    location: String,
//    phoneNo: String
// });
// 
// const Provider = mongoose.model('Provider', providerSchema);
// 
// app.use(cors());
// app.use(bodyParser.json());
// 
// app.post('/demo', async (req, res) => {
//    try {
    //    const { username, Email, Password, phone } = req.body;
    //    const newUser = new User({ username, Email, Password, phone });
    //    const doc = await newUser.save();
    //    res.status(201).json(doc);
//    } catch (error) {
    //    console.error(error);
    //    res.status(500).json({ error: 'Internal server error' });
//    }
// });
// 
// app.post('/postService', async (req, res) => {
//    try {
    //    const { username, work, location, phoneNo } = req.body;
    //    const newProvider = new Provider({ username, work, location, phoneNo });
    //    const doc = await newProvider.save();
    //    res.status(201).json(doc);
//    } catch (error) {
    //    console.error(error);
    //    res.status(500).json({ error: 'Internal server error' });
//    }
// });
// 
// app.get('/demo', async (req, res) => {
//    try {
    //    const users = await User.find({});
    //    res.json(users);
//    } catch (error) {
    //    console.error(error);
    //    res.status(500).json({ error: 'Internal server error' });
//    }
// });
// 
// app.get('/getProviders', async (req, res) => {
//    try {
    //    const providers = await Provider.find({});
    //    res.json(providers);
//    } catch (error) {
    //    console.error(error);
    //    res.status(500).json({ error: 'Internal server error' });
//    }
// });
// 
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//    console.log('Server started on port ${PORT}');
// });
// 
// 
