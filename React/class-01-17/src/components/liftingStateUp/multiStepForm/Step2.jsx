const Step2 = ({ data, setData, setStep }) => {
  return (
    <>

      <h1>Step 2</h1>

      <label >
        Email
        <input
          type="email"
          placeholder='abc@gmail.com'
          value={data.email}
          onChange={(e) => setData({
            ...data,
            email: e.target.value
          })}
        />
      </label>

      <br /><br />

      <label >
        Qualification
        <input
          type="text"
          placeholder='Intermediate'
          value={data.qualification}
          onChange={(e) => setData({
            ...data,
            qualification: e.target.value
          })}
        />
      </label>

      <br /><br />

      <button onClick={() => setStep(1)} >Prev Step</button>
      <button onClick={() => setStep(3)}>Next Step</button>


    </>
  )
}

export default Step2