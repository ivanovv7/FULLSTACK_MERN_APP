import { useNavigate } from "react-router";
import { categories } from "../../Shared/categoriesArrayMock";

export const Home = ({ products }) => {

const navigate = useNavigate();




  return (
    <>
      <div>
        {categories.map((category) => (
          <div onClick={() => navigate(`/products?category=${category}`)}>{category}</div>
        ))}
      </div>
    </>
  );
};
