import express from "express"
import { ProductsController } from "./controller/products.controller.js"
import { validateCreateProductDTO } from "./middlewares/product.middleware.js";

export const router = express.Router()

const productsController = new ProductsController();


router.get("/", async (req, res) => {

    await productsController.getAllProducts(req, res)

})

router.get('/:id', async (req, res) => {

    await productsController.getProductById(req, res)
})

router.post("/", validateCreateProductDTO, async (req, res) => {


    await productsController.createProductById(req, res)
})

router.patch('/:id', async (req, res) => {

    
        await productsController.updateProduct(req, res)
})


router.delete('/:id', async (req, res) => {

    productsController.deleteProduct(req, res)
})