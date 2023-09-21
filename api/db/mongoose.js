// This file will handle connection logic to mongo db 

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/taskManager', { useNewUrlParser: true }).then(() => {
    console.log('Connected MongoDB successfully :) ');
}).catch((e) => {
    console.log('Error while attempting to connect to MongoDB ');
    console.log(e);
});

module.exports = {
    mongoose
};