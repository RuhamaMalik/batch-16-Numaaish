import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom"

const ProductDetail = () => {
const product = useLoaderData();

  return (
    <>
    <NavLink to="/products">Go Back</NavLink>
    <h1>Detil Page</h1>
    <img src={product?.thumbnail} /> 
    <h2>{product?.title}</h2>
    <p>{product.description}</p>
    </>
  )
}

export default ProductDetail