const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5c3e4a50c6f8a142c815b0ec';

var todoIndex = 0;

if (!ObjectID.isValid(id)) {
    return console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     if ({todos}) {
//         return console.log('Id not found');
//     }
//     ++todoIndex;
//     console.log(`${todoIndex}) Todos find(): `, todos)
// });
//
// Todo.findOne({
//     _id: id
//     // completed: false
// }).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     ++todoIndex;
//     console.log(`${todoIndex}) Todo findOne():`, todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     ++todoIndex;
//     console.log(`${todoIndex}) Todo findById():`, todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
console.log(JSON.stringify(user, undefined, 2));
    console.log('User found by ID: ' + user._id + '.');
    console.log('\b' + user);

}), (e) => {
    console.log(e);
};