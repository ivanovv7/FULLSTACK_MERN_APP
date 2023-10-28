import { useState } from "react";
import { GetProductService } from "../../services/productsAPIservice";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { categories } from "../../Shared/categoriesArrayMock";

export const CreateProducts = ({ handleProductsAfterCreation }) => {
  const [draftProduct, setDraftProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  //dynamic method to change the values of the draftProduct that is a state
  const onValueChange = (value, propValue) => {
    setDraftProduct({
      ...draftProduct,
      [propValue]: value,
    });

    // console.log(draftProduct)
  };

  const clearInputs = () => {
    setDraftProduct({
      name: "",
      description: "",
      price: "",
      category: "",
    });
  };

  // const categories = ["Women Clothing", "Mens Clothing", "Books", "Coctails"];

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const reqBodyProduct = {
      name: draftProduct.name,
      description: draftProduct.description,
      price: Number(draftProduct.price),
      category: draftProduct.category,
    };

    try {
      //we return the _id from the backend for the newly created product
      const idOfNewProduct = await GetProductService.createProduct(
        reqBodyProduct
      );

      //update the state in the parent component to provoke re-render when displaying products in Products page without re-fetching
      handleProductsAfterCreation({
        _id: idOfNewProduct,
        name: reqBodyProduct.name,
        description: reqBodyProduct.description,
        category: reqBodyProduct.category,
      });

      clearInputs();
      setIsLoading(false);
    } catch (error) {
      console.log(`Error happened uppon creating new product ${error}`);
    }
  };

  return (
    <>
      {isLoading && <div>LOADING ????</div>}
      <form>
        <div className="inputsContainer">
          <TextField
            id="outlined-basic"
            label="Product name"
            variant="outlined"
            type="text"
            placeholder="Product name"
            onChange={(e) => onValueChange(e.target.value, "name")}
            value={draftProduct.name}
          />

          <TextField
            id="outlined-basic"
            label="Product description"
            variant="outlined"
            type="text"
            placeholder="Product description"
            onChange={(e) => onValueChange(e.target.value, "description")}
            value={draftProduct.description}
          />

          <TextField
            id="outlined-basic"
            label="Product price"
            variant="outlined"
            type="text"
            placeholder="Products Price"
            onChange={(e) => onValueChange(e.target.value, "price")}
            value={draftProduct.price}
          />
        </div>

        <div className="optionsContainer">
          <FormControl style={{ width: "360px" }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={draftProduct.category}
              label="Category"
              onChange={(e) => onValueChange(e.target.value, "category")}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>


          <Button color="secondary" disabled={isLoading} onClick={onSubmit}>Create product</Button>
          

        </div>
      </form>
    </>
  );
};
