const mongo = require('mongoose');
const baseURL = 'mongodb+srv://hari8778:8778hari@cluster0.z2gerw1.mongodb.net/chat';
mongo.connect(baseURL, { useUnifiedTopology: true, useNewUrlParser: true }).then(db => {
    console.log('Connected MONGODB');
}).catch((error) =>  console.log(error));