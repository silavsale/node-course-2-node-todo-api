var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});


var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//     let date = new Date();
//     console.log(date);
//     console.log('Saved todo', doc)
// }, (err) => {
//     console.log('Unable to save todo', err);
// });

// var newTodo = new Todo({
//     text: 'Eat cottage'
// }, {
//     completed: false
// }, {
//     completedAt: 11
// });
//
// newTodo.save().then((doc) => {
//     let date = new Date();
//     console.log(date);
//     console.log("New todo", doc);
// }, (err) => {
//     console.log('ERROR: ' + err);
// });

var NewTodo = new Todo({
    text: 'Eat some potatoes',
    completed: false,
    completedAt: 11
});

NewTodo.save().then((doc) => {
    let date = new Date();
    console.log(date);
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log('ERROR: ' + err);
});