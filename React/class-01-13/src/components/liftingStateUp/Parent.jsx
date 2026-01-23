import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

const Parent = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <ChildA data={count} updateCount={setCount} />
      <ChildB data={count} />

    </>
  )
}

export default Parent