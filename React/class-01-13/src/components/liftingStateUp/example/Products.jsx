import React, { useState } from 'react'

const Products = ({searchText}) => {
const [filter, setFilter] = useState([]);
  const products = [
    {
      id: 1,
      title: "Product 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },

    {
      id: 2,
      title: "Product 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },

    {
      id: 3,
      title: "Product 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },
    {
      id: 4,
      title: "Product 4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },
    {
      id: 5,
      title: "Product 5",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },
  ]

  const 




  return (
    <>

      <h1>Products</h1>

      {
        products.map((p, i) => (
          <div key={p.id+i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <hr />
          </div>
        ))
      }


    </>
  )
}

export default Products