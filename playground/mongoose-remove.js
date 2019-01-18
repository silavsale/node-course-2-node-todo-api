const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndDelete({
//     text: "Hello baby"
// }).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove("5c421bfd03c90b32e42eaae1").then(result => {
//     console.log(result);
// }, err => {
//     console.log(err);
// });



