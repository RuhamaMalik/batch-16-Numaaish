import ComponentA from './ComponentA'
const username = "Ruhama";

const Main = () => {
  return (
    <div>


      <h1>Main</h1>

      <ComponentA name={username} />

      {/* <button className='button'  onClick={()=>window.print()} >Download</button> */}

    </div>
  )
}

export default Main