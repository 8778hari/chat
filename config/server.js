const express = require('express');
const app = express();
const server = require('http').createServer(app);
const userRouter = require('../router/user');
const messageRouter = require('../router/message');

var port_number = 8080;
//process.env.PORT || 

app.use(express.json())
app.use(express.static('public'));

app.use('/user',userRouter);
app.use('/message',messageRouter)

app.get('/',(req,res) =>{
    res.send('Hi, there (chat-node-flutter-app');
});

server.listen(process.env.PORT || '8080', '0.0.0.0');

module.exports = server;