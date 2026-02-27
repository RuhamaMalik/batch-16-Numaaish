///////////////// useMemo

// import { useMemo, useState } from 'react';
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);
//   const [sub, setSub] = useState(1000);

//   const multiply = useMemo(
//     () => {
//       console.log("hello------------------");
//       return count * 10
//     }, [count]
//   )

//   return (
//     <>
//       <h1>Myltiply : {multiply}</h1>

//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)} >Update</button>
//       <h1>Subtract: {sub}</h1>
//       <button onClick={() => setSub(sub - 1)}>Decrease</button>
//     </>
//   )
// }

// export default App




///////////////// useCallback

import './App.css'
import Batch16 from "./Batch16";
import { useCallback, useState } from "react"

const App = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const doSomething = useCallback(
    () => {
      ////// some
    }, [count]
  )

  return (
    <>
      <Batch16 doSomething={doSomething} count={count} />

      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>

      <h1>Count2 :{count2}</h1>
      <button onClick={() => setCount2(count2 + 10)}>Update count2</button>
    </>
  )
}

export default App





