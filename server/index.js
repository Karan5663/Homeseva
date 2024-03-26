const express = require('express');
const cors = require('cors');

const bodyparser = require('body-parser');
const server = express();

server.use(cors());
server.use(bodyparser.json());

server.post('/demo',(req,res)=>{
    console.log(req.body)
    res.json(req.body);
})

server.listen(8080,()=>{
    console.log('server started')
})