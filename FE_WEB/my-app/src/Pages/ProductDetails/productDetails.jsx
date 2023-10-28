import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { GetProductService } from "../../services/productsAPIservice";
import { ProductDetailsCard, ProductDetailsContainer } from "./productDetailsStyled";




export const ProductDetails = ({handleProductsAfterDeletion}) => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const Id = params.id;

  useEffect(() => {
    GetProductService.getProductDetails(Id).then((product) => {
      setSingleProduct(product);
    });
  }, []);


  const deleteSingleProduct = (id) => {


    try {
      GetProductService.deleteSingleProduct(id).then((result) => {

        console.log( " RESULT FROM COMPONENT !",result)
        return result
      })
      console.log("clicked")


      try {
        handleProductsAfterDeletion(id);
      } catch (error) {
        console.log(`Error in handleProductsAfterDeletion: ${error}`);
      }

    } catch (error) {
      console.log(`Error happened when deleting product ${error}`)
    }
    
  }

  return (
    <ProductDetailsContainer>
      <ProductDetailsCard>
        <h1>Product title:{singleProduct.name} </h1>
        <p>Product description: {singleProduct.description}</p>
        <p>Price: {singleProduct.price}</p>

            
       

     <button onClick={() => deleteSingleProduct(Id)}>DELETE</button>
    
      </ProductDetailsCard>
    </ProductDetailsContainer>
  );
};
