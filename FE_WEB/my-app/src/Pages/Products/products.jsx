import { ProductCard } from "../../components/ProductCard/ProductCard"
import { useLocation } from "react-router";

export const Products = (props) => {
    // console.log('PROPS',props.products)


    const location = useLocation()

    const rawSearchRawValue = location.search
    const splitedSearchedValue = rawSearchRawValue.split('=')

    console.log(splitedSearchedValue)

    const rawCategoryValue = splitedSearchedValue[1]

    const cleanCategoryValue = rawCategoryValue && rawCategoryValue.replace(/%20/g, " ");

    const filteredProductsByCategory = cleanCategoryValue ? props.products.filter((product) => product.category === cleanCategoryValue) : props.products

    return (

        <div className="productsContainer">
            {filteredProductsByCategory.map((product, index) => (
                <ProductCard key={product._id} product={product} />
            ))}

        </div>
    )
}