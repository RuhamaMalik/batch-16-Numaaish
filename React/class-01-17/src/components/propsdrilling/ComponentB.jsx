import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({name}) => {
  return (
   
    <>
     <h1>ComponentB</h1>
     <hr />
     <ComponentC name={name} />
    </>
  )
}

export default ComponentB