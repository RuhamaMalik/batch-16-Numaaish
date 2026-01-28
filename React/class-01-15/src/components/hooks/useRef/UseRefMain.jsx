import React, { useRef, useState } from 'react'

const UseRefMain = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const [name, setName] = useState("")


  const handleSetValue = () => {
    let number = Math.random()
    ref.current.value = number;
    ref.current.style.outline = "none";
    ref.current.style.border = "none";
  }

  const handleReset = () => {
    setName("");
    ref.current.focus();
  }

  return (
    <>
      <input
        ref={ref}
        type="text"
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSetValue} >Set Value</button>
      <button ref={ref2} onClick={handleReset} >Reset</button>
    </>
  )
}

export default UseRefMain