import './App.css'
import useOnlineStatus from './customHook/useOnlineStatus'
// import LearnUseReducer from './LearnUseReducer'
const App = () => {
const isOnline = useOnlineStatus();
console.log(isOnline);

  return (
  <>
  {/* <LearnUseReducer/> */}
  <h1>{isOnline ? "Online":"Offline"}</h1>
  </>
  )
}

export default App