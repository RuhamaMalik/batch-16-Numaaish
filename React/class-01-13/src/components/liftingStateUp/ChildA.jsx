import React from 'react'

const ChildA = ({data,updateCount}) => {
  return (
    <>
    <h1>ChildA {data}</h1>
    <button onClick={()=>updateCount((prev)=> prev+1)}  >Update</button>
    </>

  )
}

export default ChildA