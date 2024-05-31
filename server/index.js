const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


const server = express();
main().catch(err => console.log(err));

async function main() {
 await mongoose.connect('mongodb+srv://homeseva:home123@cluster0.i6tgdbe.mongodb.net/');
  console.log('db connected');  
}
const userSchema = new mongoose.Schema({
    username: String,
    Email: String,
    Password: String,
    phone: String
  });

  const User = mongoose.model('User', userSchema);

const providerSchema = new mongoose.Schema({
    username: String,
    work: String,
    location: String,
    phoneNo: String
});

const Provider = mongoose.model('Provider', providerSchema);

const providerinfoSchema = new mongoose.Schema({
    Providername: String,
    Provideraddress: String,
    Providercontact: String,
    Provideremail: String,
    Providercpass: String,
    Plocation: String,
    work:String,
    Details:String,
    image: String
});

const Provideri = mongoose.model('Provideri', providerinfoSchema);




server.use(cors());
server.use(bodyparser.json());



server.post('/demo',async(req,res)=>{
 try{
    let user = new User();
    user.username = req.body.username;
    user.Email = req.body.Email;
    user.Password = req.body.Password;
    user.phone = req.body.phone;
  const doc = await user.save();
 

    console.log(doc);
    res.json(doc);
} catch (error) {
    console.error(error);
    res.json({ error: 'Internal server error' });
}
});

server.post('/postService',async(req,res)=>{
    try{
       let provider = new Provider();
       provider.username = req.body.username;
       provider.work = req.body.work;
       provider.location = req.body.location;
       provider.phoneNo = req.body.phoneNo;
     const doc = await provider.save();
    
   
       console.log(doc);
       res.json(doc);
   } catch (error) {
       console.error(error);
       res.json({ error: 'Internal server error' });
   }
   });

server.post('/PostproInfo',async(req,res)=>{
    try{
       let provideri = new Provideri();
       provideri.Providername = req.body.Providername;
       provideri.Provideraddress = req.body.Provideraddress;
       provideri.Providercontact = req.body.Providercontact;
       provideri.Provideremail = req.body.Provideremail;
       provideri.Providercpass = req.body.Providercpass;
       provideri.Plocation = req.body.Plocation;
       provideri.work = req.body.work;
       provideri.Details = req.body.Details;
       provideri.image = req.body.image;

     const doc = await provideri.save();
    
   
       console.log(doc);
       res.json(doc);
   } catch (error) {
       console.error(error);
       res.json({ error: 'Internal server error' });
   }
   });
//
server.get('/demo',async(req,res)=>{
    try{
  const docs = await User.find({});
  res.json(docs);
} catch (error) {
    console.error(error);
    res.jsonjson({ error: 'Internal server error' });
}

});

server.get('/getProviders', async (req, res) => {
    try {
        const provider = await Provider.find({});
        res.json(provider);
    } catch (error) {
        console.error(error);
        res.json({ error: 'Internal server error' });
    }
});

server.get('/getproInfo', async (req, res) => {
    try {
        const proi = await Provideri.find({});
        res.json(proi);
    } catch (error) {
        console.error(error);
        res.json({ error: 'Internal server error' });
    }
});



//Add this route for handling login requests
server.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username, Password: password });
  
      if (user) {
      // Authentication successful
        res.status(200).json({ message: 'Login successful', data: user });
      } else {
       //Authentication failed
        res.status(401).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  








server.listen(8080,()=>{
    console.log('server started')
    
})





