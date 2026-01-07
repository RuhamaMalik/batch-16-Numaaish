import React from 'react'

// const Card = (props) => {

//   // console.log(props.name);


//   return (
//     <>

//       <h1>MY CARD</h1>
//       <h3>{props.name}</h3>
//       <ul>
//         <li>
//           Price: {props.price || "free"}
//         </li>
//       </ul>
//       <hr />

//     </>
//   )
// }

///////////////////////////////////////////////

const Card = ({ name, price, variations, colours }) => {
  // console.log(colours);

  return (
    <>

      <h1>MY CARD</h1>
      <h3>{name}</h3>
      <ul>
        <li>
          Price: {price || "free"}
        </li>
      </ul>




      {
        colours ? <h3>Colours:</h3> : ""
      }


      <ul>
        {
          colours ? colours?.map((colour, index) => (
            <li key={index} >{colour}</li>
          ))
            : ""
        }
      </ul>
      <hr />

    </>
  )
}


export default Card