const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const ProviderStatus = require('../src/Screens/ProviderStatus');
const server = express();
main().catch(err => console.log(err));

async function main() {
<<<<<<< HEAD
  await mongoose.connect('mongodb+srv://homeseva:home123@cluster0.i6tgdbe.mongodb.net/');
  console.log('db connected');
=======
 await mongoose.connect('mongodb+srv://homeseva:home123@cluster0.i6tgdbe.mongodb.net/');
  console.log('db connected');  
>>>>>>> 547cd5674a5faa55a1079231a275f9e7bc4063d8
}
const userSchema = new mongoose.Schema({
    


    
    username: String,
    Email: String,
    Password: String,
    phone: String
  });

  const User = mongoose.model('User', userSchema);

  const UserContactSchema = new mongoose.Schema({
    contusername: String,
    address: String,
    phoneNo: String,
    contEmail: String,
    service: String,
    location: String,
    providerName: String,
    status: { type: String, default: 'pending' },
});

  

  const UserContact = mongoose.model('UserContact', UserContactSchema);

  const ProStatusSchema = new mongoose.Schema({
    status: String,
    providerName: String,
  });
  const ProStatus = mongoose.model('ProviderStatus', ProStatusSchema);

  
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
      let usercontact = new UserContact();

      usercontact.contusername = req.body.name;
      usercontact.address = req.body.address;
      usercontact.phoneNo = req.body.phoneNumber;
      usercontact.contEmail=req.body.email;
      usercontact.service = req.body.service;
      usercontact.location = req.body.location;
      usercontact.status = 'Pending'; 
      
     const doc = await usercontact.save();
    
     
       console.log(doc);
       res.json({ success: true, message: 'Provider info saved successfully' });
       
   } catch (error) {
       console.error(error);
       res.json({ error: 'Internal server error' });
   }
   });

   
   server.post('/postcontact',async(req,res)=>{
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
server.get('/getusercontact', async (req, res) => {
  try {
      const usercontact = await UserContact.find({});
      res.json(usercontact);
  } catch (error) {
      console.error(error);
      res.json({ error: 'Internal server error' });
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
      const { location, service } = req.query;
      let query = {};

      if (location && service) {
          query = { location, service };
      }
      const providers = await Provideri.find(query);

      res.json(providers);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
});



server.get('/getservinfo', async (req, res) => {
  try {
    const { Providername, Provideremail, Providercpass,Plocation,work ,image} = req.query;
    console.log('Received query parameters:', { Providername, Provideremail, Providercpass,Plocation,work ,image}); // Log query parameters

    let query = {};
    if (Providername && Provideremail && Providercpass && Plocation && work && image) {
      query = { Providername, Provideremail, Providercpass,Plocation ,work ,image};
    }

    const providers = await Provideri.find(query);
    console.log('Queried providers:', providers); // Log the providers

    res.json(providers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
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
  


//Add this route for handling provider login requests
  server.post('/prologin', async (req, res) => {
    try {
      const { Providername, Providercpass } = req.body;
      const user = await Provideri.findOne({ Providername, Providercpass:Providercpass });
  
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
  
  server.put('/updateUserContactStatus', async (req, res) => {
    try {
        const { providerName, providerStatus, deleteUserContact } = req.body;
        console.log('Received request body:', req.body);

        if (deleteUserContact && providerStatus === 'Completed') {
            console.log('Deleting user contact for provider:', providerName);
            const deletedContact = await UserContact.deleteOne({ providerName });
            if (deletedContact.deletedCount > 0) {
                console.log('User contact deleted successfully');
                res.json({ success: true, message: 'User contact deleted successfully' });
            } else {
                console.log('User contact not found');
                res.status(404).json({ success: false, message: 'User contact not found' });
            }
        } else {
            console.log('Updating provider status:', providerName, providerStatus);
            
            // Update the provider status in ProStatus collection
            const provider = await ProStatus.findOneAndUpdate(
                { providerName },
                { status: providerStatus },
                { new: true, upsert: true }
            );

            if (provider) {
                // Update UserContact with the selected provider name
                const userContactUpdate = await UserContact.findOneAndUpdate(
                    { providerName },
                    { status: providerStatus, providerName },
                    { new: true }
                );

                if (userContactUpdate) {
                    console.log('User contact updated:', userContactUpdate);
                    res.json({ success: true, provider, userContactUpdate });
                } else {
                    console.log('User contact not found for updating provider name');
                    res.status(404).json({ success: false, message: 'User contact not found for updating provider name' });
                }
            } else {
                console.log('Provider status not found');
                res.status(404).json({ success: false, message: 'Provider status not found' });
            }
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

server.post('/getusercontact1', async (req, res) => {
  const { username, status } = req.body;

  try {
    const services = await UserContact.find({ contusername: username, status: status });

    if (services.length > 0) {
      res.json({ success: true, services });
    } else {
      res.json({ success: false, message: 'No services found' });
    }
  } catch (error) {
    res.json({ success: false, message: 'Error fetching services' });
  }
});



server.listen(8080,()=>{
    console.log('server started')
    
})





