export const fetchProducts = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    return data;

  } catch (error) {
    console.log(error);
  }
}





export const fetchProductDetail = async ({ id }) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    return data;

  } catch (error) {
    console.log(error);
  }
}
