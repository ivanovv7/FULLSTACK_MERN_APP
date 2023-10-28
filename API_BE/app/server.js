import express from "express"
import { mongo_connection } from "./mongoConnection.js"
import mongoose from "mongoose"
import { productSchema } from "./mongoose/products.schema.js"
import { router } from "./routes.js"

import cors from "cors"

const server = express()

server.use(cors())
server.use(express.json())

server.use('/products',router)

server.listen(3000, () => {

    console.log("server is up")

    mongo_connection()
})