import React from 'react'
import Card from './Card'

const Main = () => {

  const variations = { sm: 50, lg: 75, xl: 100 }

  return (
    <>
      <h1 >Props MAIN COmponent</h1>

      <Card
        name="Shampoo"
        price={45}
        variations={variations}
        colours={["pink", "black", "purple"]} />

      <Card name="Soap" />
      <Card name="Cream" />
      <Card name="Lotion" />
      <Card name="Face Wash" />


    </>
  )
}

export default Main