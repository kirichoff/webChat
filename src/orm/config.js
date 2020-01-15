
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Quizer:12345678k@quizerdata-xju83.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("Quiz").collection("Users");
    console.log(collection.find({}).toArray((err,res)=> console.log('res',res,'err',err)  ))
    //console.log(collection)
});

