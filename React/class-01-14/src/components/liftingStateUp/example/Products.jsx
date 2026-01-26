// import React, { useState } from 'react'

// const Products = ({ searchText }) => {
//   const products = [
//     {
//       id: 1,
//       title: "Shampoo",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
//     },

//     {
//       id: 2,
//       title: "Soap",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
//     },

//     {
//       id: 3,
//       title: "Body wash",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
//     },
//     {
//       id: 4,
//       title: "Face wash",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
//     },
//     {
//       id: 5,
//       title: "Vasline",
//       desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
//     },
//   ]

//   let filtered = [];
//   filtered = products?.filter(
//     (product) => product?.title.toLowerCase().includes(searchText?.toLowerCase())
//   )

//   return (
//     <>

//       <h1>Products</h1>

//       {
//         Array.isArray(filtered) && filtered.length > 0 ? filtered.map((p, i) => (
//           <div key={p.id + i}>
//             <h3>{p.title}</h3>
//             <p>{p.desc}</p>
//             <hr />
//           </div>
//         ))
//           : (
//             <h1>No match found!</h1>
//           )
//       }


//     </>
//   )
// }

// export default Products




/////////////////////////////////




const Products = ({ filtered }) => {
 
  return (
    <>

      <h1>Products</h1>

      {
        Array.isArray(filtered) && filtered.length > 0 ? filtered.map((p, i) => (
          <div key={p.id + i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <hr />
          </div>
        ))
          : (
            <h1>No match found!</h1>
          )
      }


    </>
  )
}

export default Products