import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./Pages/About/about";
import { Products } from "./Pages/Products/products";
import { CreateProducts } from "./Pages/CreateProduct/createProducts";
import { Home } from "./Pages/Home/home";
import { Header } from "./components/Header/header";
import { useEffect, useState } from "react";
import { GetProductService } from "./services/productsAPIservice";
import { ProductDetails } from "./Pages/ProductDetails/productDetails";

function App() {

  const [products, setProducts] = useState([])
  
  useEffect(() => {

    //we have to resolve the promise since useEffect does not work with async/await
    GetProductService.getProducts().then((products) => {
      // console.log("Products fetched", products)

      setProducts(products)
    })
  }, [])

  const handleProductsAfterCreation = (product) => {

    setProducts([...products,product])
  } 

  const handleProductsAfterDeletion = (productId) => {

    const updatedProducts= products.filter((productOfIteration) => productOfIteration._id !== productId )

    console.log( products)
    console.log(productId)
   setProducts(updatedProducts)
  }

// console.log(products)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home products = {products} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products products = {products} />} />
          <Route path="/create_product" element={<CreateProducts handleProductsAfterCreation = {handleProductsAfterCreation} />} />
          <Route path="/product/details/:id" element={<ProductDetails handleProductsAfterDeletion={handleProductsAfterDeletion} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
