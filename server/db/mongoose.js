var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
// mongoose.connect(process.env.MONGODB_URI = 'mongodb://admin:admin12@ds143604.mlab.com:43604/todoapp', {useNewUrlParser: true});
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});


module.exports = {mongoose};

