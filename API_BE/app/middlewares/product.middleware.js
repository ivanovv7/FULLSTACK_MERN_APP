export const validateCreateProductDTO = (req, res, next) => {

    //destructure the req.body
    const { name, description, price, category } = req.body

    console.log(price)
 if(!name || !description || !price || !category){

    return res.status(422).send({message: `Request body is invalid`})
 }

 next()

}