import mongoose from "mongoose"

const MONGO_URL = "mongodb+srv://ivan:ivan@cluster0.mezuiju.mongodb.net/?retryWrites=true&w=majority"

export const mongo_connection = async () => {

    try {
        
        await mongoose.connect(MONGO_URL,{
            dbName:"ecommerce"
        })

        console.log("DB CONNECTED")
    } catch (error) {
        throw new Error("ERROR")
    }
}