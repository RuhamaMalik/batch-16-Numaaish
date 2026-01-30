// import React, { useState } from 'react'
// import Parent from './Parent'
// import SearchBox from './example/SearchBox'
// import Products from './example/Products';

// const Main = () => {
//   const [search, setSearch] = useState("");

//   // console.log(search);

//   return (
//     <>
//       {/* <Parent /> */}
//       <SearchBox search={search} setSearch={setSearch} />

//       <Products searchText={search} />

//     </>
//   )
// }

// export default Main



///////////////////////////////


import React, { useState } from 'react'
import Parent from './Parent'
import SearchBox from './example/SearchBox'
import Products from './example/Products';

const Main = () => {
  const [search, setSearch] = useState("");

 const products = [
    {
      id: 1,
      title: "Shampoo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },

    {
      id: 2,
      title: "Soap",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },

    {
      id: 3,
      title: "Body wash",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },
    {
      id: 4,
      title: "Face wash",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },
    {
      id: 5,
      title: "Vasline",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quibusdam."
    },
  ]

  let filtered = [];
  filtered = products?.filter(
    (product) => product?.title.toLowerCase().includes(search?.toLowerCase())
  )


  return (
    <>
      {/* <Parent /> */}
      <SearchBox search={search} setSearch={setSearch} />

      <Products filtered={filtered} />

    </>
  )
}

export default Main