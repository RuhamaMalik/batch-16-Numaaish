import { useState } from "react";

const State = () => {

  // const [varName , functionToUpdate] = useState(initialValue)
  const [count, setCount] = useState(0);


  function counter() {
    setCount(count + 1);
    console.log(">>>>>>>> " + count);

  }


  return (
    <>

      <h1>{count}</h1>
      <button onClick={counter} >Update</button>


    </>
  )
}

export default State