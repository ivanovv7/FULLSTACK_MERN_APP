import mongoose from "mongoose"

const {Schema} = mongoose

export const productSchema = new Schema({
    name: {
        type:String,
    },
    description: {
        type:String,
        
    },
    price: {
        type:Number
    },

    category: {
        type:String
    }
    
})

