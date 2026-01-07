import { useEffect, useState } from "react"


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function fetchData() {

      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      setProducts(data.products)

    }

    fetchData();

  }, [])

  console.log(products);
  return (
    <>

      {
     Array.isArray(products) &&  products?.map((product, i) => (
          <div key={i + product.id}>
            <img width={500} src={product.images[0] || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRF8ygks4sWrGs6wYuRPb_EqnHKPKAQKv_PQ&s"} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <ul>
              {product.tags?.map((tag,i)=>(
               <li key={i}>{tag}</li>
              ))}
            </ul>

            <h5>Reviews</h5>

             {

              product.reviews?.map((review, i)=>(
                <ul>
                  <li>{review?.reviewerName }</li>
                  <li>{review?.reviewerEmail }</li>
                  <li>{review?.comment }</li>
                  <li>{review?.rating }</li>
                  <li>{review?.date }</li>
                </ul>
              ))
             }

            <hr />
          </div>
        ))
      }

    </>
  )
}

export default Products