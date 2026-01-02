import React from 'react'
import Card from './Card'
import Button from './Button'

const Main = () => {

  const variations = { sm: 50, lg: 75, xl: 100 }

  return (
    <>
      <h1 >Props MAIN COmponent</h1>

      <Button text="View Details" />
      <Button text="Sign Up" icon="fa-solid fa-user" iconBg={true} />
      <Button text="Edit" icon="fa-solid fa-pencil" />
      <Button text="Delete" icon="fa-solid fa-trash" iconBg={true} />


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