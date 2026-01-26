import React, { useState } from 'react'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Output from './Output';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    contact: "",
    email: "",
    password: "",
    address: "",
    qualification: ""
  })



  return (

    <>

      <h1>Multi Step Form</h1>

      {
        step === 1 && (
          <Step1
            data={formData}
            setData={setFormData}
            setStep={setStep}
          />
        )
      }

      {
        step === 2 && (
          <Step2
            data={formData}
            setData={setFormData}
            setStep={setStep}
          />
        )
      }

      {
        step === 3 && (
          <Step3
           data={formData}
            setData={setFormData}
            setStep={setStep}
          
          />
        )
      }

      {
        step === 4 && (
          <Output data={formData} />
        )
      }


    </>
  )
}

export default Form