import React, { useState } from 'react'
import Parent from './Parent'
import SearchBox from './example/SearchBox'
import Products from './example/Products';

const Main = () => {
  const [search, setSearch] = useState("abcd");

  // console.log(search);

  return (
    <>
      {/* <Parent /> */}
      <SearchBox search={search} setSearch={setSearch} />

      <Products searchText={search} />

    </>
  )
}

export default Main