import "./ProductCard.css"
import { useNavigate } from "react-router";



export const ProductCard = ({ product }) => {

  const navigate = useNavigate()
 
  
  return (
    <div className="productCard" onClick={() =>navigate(`/product/details/${product._id}`) }>
      <div className="productDetails">
        <h2>Name: {product.name}</h2>
        <p>Description: {product.description}</p>
        <p>Price: {product.price} Euro</p>
        <p>Category: {product.category}</p>
      </div>
    </div>
  );
};
