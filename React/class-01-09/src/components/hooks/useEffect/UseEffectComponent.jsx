import React, { useState, useEffect } from 'react'

const UseEffectComponent = () => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);


  const UpdateCount = () => {
    setCount(count + 1)
  }


  const UpdateCount1 = () => {
    setCount1(count1 + 1)
  }



  // useEffect(()=>{ },[optional])


  useEffect(() => {
    console.log("Hello bacho");

  }, [count, count1]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={UpdateCount} >Update</button>

      <hr />

      <h1>{count1}</h1>
      <button onClick={UpdateCount1} >UpdateCount</button>

    </>
  )
}

export default UseEffectComponent;


