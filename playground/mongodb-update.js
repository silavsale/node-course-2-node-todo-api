const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Enable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c3d558503c90b32e42eaa05')
    // }, {
    //     $set: {
    //         text: 'Walk the dog'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     let time = new Date();
    //     console.log(time);
    //     console.log(res)
    // });

    // db.collection('Users').findOneAndUpdate({
    //         name: 'Leo'
    //     }, {
    //         $set: {
    //             name: 'Leonid'
    //         }
    //     }, {returnOriginal: false}
    // ).then((res) => {
    //     let date = new Date();
    //     console.log(date);
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Leonid'
    }, {
        $inc: {
            age: -40
        }
    }, {
        returnOriginal: false
    }).then((res)=>{
        let date = new Date();
            console.log(date);
            console.log(res);
    });

});