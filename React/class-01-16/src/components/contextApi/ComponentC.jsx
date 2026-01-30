import React, { useContext } from 'react'
import { UserContext } from './Boss'

const ComponentC = () => {

 const {user,isActive} = useContext(UserContext);
 
//  console.log(isActive);
 

  return (
    <h1>ComponentC ----- {user.name}</h1>
  )
}

export default ComponentC