

export class GetProductService {

    static getProducts = async () => {

        const response = await fetch("http://localhost:3000/products")

        const products = await response.json()

        return products
    }


    static createProduct = async (product) => {
    
        const response = await fetch("http://localhost:3000/products",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })

        const result = await response.json()

        console.log( "Result from post call" ,result)

        return result.id

    }


    static getProductDetails = async (productId) => {

        const response = await fetch(`http://localhost:3000/products/${productId}`)

        const result = await response.json()

        return result
    }



    static deleteSingleProduct = async (productId) => {

        const response = await fetch(`http://localhost:3000/products/${productId}`,{
            method:"DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })


        const result = await response.json()
        return result

    }
}

