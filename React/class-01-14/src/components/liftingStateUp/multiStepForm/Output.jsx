const Output = ({ data }) => {
  return (
    <>

      <h1>Review Form</h1>

      <p><b>Name : </b> {data.name}</p>
      <p><b>Father Name : </b> {data.fatherName}</p>
      <p><b>Contact : </b> {data.contact}</p>
      <p><b>Email : </b> {data.email}</p>
      <p><b>Address : </b> {data.address}</p>
      <p><b>Qualification : </b> {data.qualification}</p>
      <p><b>Password : </b> {data.password}</p>


    </>
  )
}

export default Output