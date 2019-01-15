// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// var user = {name: 'Andrew' , age: 25};
// var{name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Enable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');


    // db.collection('Todos').find({
    //     _id: new ObjectID('5c3d558503c90b32e42eaa05')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Sergiy'}).toArray().then((docs) =>{
       console.log('Users');
       console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log('Unable to fetch data from Users', err);
    });

    db.collection('Users').find({name: 'Sergiy'}).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Users', err);
    });

    // client.close();
});




