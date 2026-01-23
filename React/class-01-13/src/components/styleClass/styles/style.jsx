import React from 'react'

const Style = () => {

  const myStyle = {
    height: "300px",
    width: "300px",
    backgroundColor: "red"
  }

  return (
    <>
      <div style={myStyle} className="box">Hello</div>
    </>
  )
}

export default Style