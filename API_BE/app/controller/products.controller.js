import mongoose from "mongoose"
import { productSchema } from "../mongoose/products.schema.js";
import { ProductModel } from "../models/product.model.js";



export class ProductsController {

    productsModel

    constructor() {
        this.productsModel = new ProductModel()
    }


    async getAllProducts(req, res) {


        const products = await this.productsModel.getAllProducts()
        
        res.send(products)


    }

    async getProductById(req, res) {
        const id = req.params.id
        console.log("IDDDDD", id)

        try {
            const foundProduct = await this.productsModel.getProductById(id)

            res.send(foundProduct)
        } catch (error) {
            console.log(error.message)
            res.status(404).send({ message: `Product with ${id} was not found` })
        }



    }

    async createProductById(req, res) {

        const { name, description, price,category } = req.body

        const product = {
            name: name,
            description: description,
            price: price,
            category:category
        }



        const productId = await this.productsModel.createProductById(product)

        res.status(201).send({ message: `Product with id ${productId} was created`, id:productId })

    }
    updateProduct = async (req, res) => {
        const id = req.params.id
        const { name, description, price,category } = req.body
        const product = {
            name: name,
            description: description,
            price: price,
            category:category
        }
       
    
        try {
            await this.productsModel.updateProduct(id, product)
        res.status(200).send({ message: `Product with ${id} was updated!` })
        } catch (error) {
            res.status(404).send({message: `Product with ${id} was not found`})
        }
        



    }

    async deleteProduct(req, res) {

        const id = req.params.id

        this.productsModel.deleteProduct(id)

        res.send({ message: `Product with id ${id} was deleted` })
    }
}