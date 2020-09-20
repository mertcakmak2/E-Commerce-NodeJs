const mongoDb = require('mongodb')
const MongoClient = mongoDb.MongoClient;

let _db;

const mongoDatabase = {
    connect() {
        MongoClient.connect('mongodb+srv://mertcakmak:8NIpweksnlXJJZo9@cluster0.925ew.mongodb.net/node-app?retryWrites=true&w=majority').then(client => {
            console.log("Connected to MongoDb")
            _db = client.db()
        }).catch(err => {
            console.log(err)
        })
    },
    getDb() {
        return _db
    }
}

module.exports = mongoDatabase
// module.exports = getDb;