const { MongoClient } = require("mongodb");

class ProductController {
    constructor() {
        this.conStr = "mongodb://localhost:27017/simpleshop";
        this.mongoClient = new MongoClient(this.conStr, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async connect() {
        try {
            await this.mongoClient.connect();
            console.log("Connected to MongoDB");
            const db = this.mongoClient.db("simpleshop");
            return db;
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error;
        }
    }
     async inseretProduct(newproduct){
        const db = await this.connect()
        db.collection("product").insertOne(JSON.stringify(newproduct,(err,result) =>{
            if (err)
            console.log(err)
            else 
            return("inseerted")
        }))
    }

    getAllProducts(){

    }
}


module.exports = ProductController;
