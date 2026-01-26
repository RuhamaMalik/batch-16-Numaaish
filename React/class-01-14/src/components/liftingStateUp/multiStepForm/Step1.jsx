import React from 'react'

const Step1 = ({ data, setData, setStep }) => {
  return (
    <>

      <h1>Step 1</h1>

      <label htmlFor="n">Name</label>
      <input
        id='n'
        type="text"
        placeholder='Ruhama Gull'
        value={data.name}
        onChange={(e) => setData({
          ...data,
          name: e.target.value
        })}
      />

      <br /><br />

      <label htmlFor="f">Father Name</label>
      <input
        id='f'
        type="text"
        placeholder='Muhammad Murtuza'
        value={data.fatherName}
        onChange={(e) => setData({
          ...data,
          fatherName: e.target.value
        })}
      />

      <br /><br />

      <button onClick={() => setStep(2)}  >Next Step</button>

    </>
  )
}

export default Step1