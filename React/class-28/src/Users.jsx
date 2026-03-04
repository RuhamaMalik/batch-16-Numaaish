import useFetch from "./customHook/useFetch"

const Users = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/users");
  
  if(loading){
  return <h1>Loading....</h1>}
if(error){
  return <h1>{error || "Masly hi Masly"}</h1>}

  return (
    <>
      <h1>Users</h1>
      <table style={{margin:"0 auto"}} border={1}>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Department</th>
          <th>Email</th>
          <th>Gender</th>
        </tr>
        {
          data?.users?.map((user, i) => (
            <tr key={user.id+i}>
              <td>{user.firstName}</td>
              <td>{user.age}</td>
              <td>{user.company.department}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
            </tr>
          ))
        }
      </table>
    </>
  )
}

export default Users