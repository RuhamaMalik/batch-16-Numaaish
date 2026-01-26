import React from 'react'

const Step3 = ({ data, setData, setStep }) => {
  return (
    <>

      <h1>Step 3</h1>

      <label >
        Contact
        <input
          type="text"
          placeholder="82382783273"
          value={data.contact}
          onChange={(e) => setData({
            ...data,
            contact: e.target.value
          })}
        />
      </label>

      <br /><br />

       <label >
        Address
        <input
          type="text"
          placeholder="Street 1"
          value={data.address}
          onChange={(e) => setData({
            ...data,
            address: e.target.value
          })}
        />
      </label>

      <br /><br />


       <label >
        Password
        <input
          type="text"
          placeholder="hjA789@"
          value={data.password}
          onChange={(e) => setData({
            ...data,
            password: e.target.value
          })}
        />
      </label>

      <br /><br />


        <button onClick={() => setStep(2)} >Prev Step</button>
      <button onClick={() => setStep(4)}>Next Step</button>

    </>
  )
}

export default Step3