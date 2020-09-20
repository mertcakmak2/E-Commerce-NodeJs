const mongo = require('../database/MongoDbConnect')

class Adress{
    constructor(address){
        this.address = address;
    }

    save(){
        return new Promise((resolve, reject) => {
            let db = mongo.getDb()
            db.collection('Adresses').insertOne(this).then(result=>{
                resolve(result)
            }).catch(err=>{
                resolve(err)
            })
        })
    }
}

module.exports = Adress