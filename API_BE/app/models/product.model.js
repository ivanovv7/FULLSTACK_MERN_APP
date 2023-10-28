import mongoose from "mongoose"
import { productSchema } from "../mongoose/products.schema.js";

export class ProductModel {

    productsModel;
    constructor(){
        this.productsModel= mongoose.model('product', productSchema,"products")

    }

    async getAllProducts(){
        const products = await this.productsModel.find()

        return products
    }

    async getProductById(productId){
     
        const foundProduct = await this.productsModel.findById(productId)

        if(!foundProduct) throw new Error("Product is not found")
        return foundProduct
    }

    async createProductById(productData){
       
        //a document is created that is about to be saved in the Mongo DB!
        const product = new this.productsModel(productData)

        //this is the new product that was created in the DB
        //this is the reason we can extract the ID
       const response = await product.save()
        
       return String(response._id) 
    }

    async updateProduct(id,data){

        const product =  this.getProductById(id)

            
            await this.productsModel.updateOne({_id: id},
                {
                    name:data.name || product.name,
                    description: data.description || product.description,
                    price: data.price || product.price
                })            
    }

    async deleteProduct(id){

        await this.productsModel.findByIdAndDelete(id)
    }
}