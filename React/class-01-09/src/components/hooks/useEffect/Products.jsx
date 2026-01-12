// import { useEffect, useState } from "react"


// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {

//     async function fetchData() {

//       const res = await fetch('https://dummyjson.com/products')
//       const data = await res.json()
//       setProducts(data.products)

//     }

//     fetchData();

//   }, [])

//   console.log(products);
//   return (
//     <>

//       {
//      Array.isArray(products) &&  products?.map((product, i) => (
//           <div key={i + product.id}>
//             <img width={500} src={product.images[0] || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRF8ygks4sWrGs6wYuRPb_EqnHKPKAQKv_PQ&s"} alt={product.title} />
//             <h1>{product.title}</h1>
//             <p>{product.description}</p>
//             <ul>
//               {product.tags?.map((tag,i)=>(
//                <li key={i}>{tag}</li>
//               ))}
//             </ul>

//             <h5>Reviews</h5>

//              {

//               product.reviews?.map((review, i)=>(
//                 <ul>
//                   <li>{review?.reviewerName }</li>
//                   <li>{review?.reviewerEmail }</li>
//                   <li>{review?.comment }</li>
//                   <li>{review?.rating }</li>
//                   <li>{review?.date }</li>
//                 </ul>
//               ))
//              }

//             <hr />
//           </div>
//         ))
//       }

//     </>
//   )
// }

// export default Products

























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
        Array.isArray(products) && products?.map((product, i) => (

     

            <div key={i} className="card" style={{width:"18rem"}}>
              <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

          )
        )
      }

    </>
  )
}

export default Products