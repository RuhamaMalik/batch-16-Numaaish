import { useEffect, useState } from 'react'


const StopWatch = () => {
  const [time, setTime] = useState(7702);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000);
    }


    return () => clearInterval(intervalId);

  },
    [isRunning]
  )

  return (

    <>
      <h1>StopWatch</h1>

      <h1>hours: {Math.floor(time/3600)}</h1>
      <h1>minutes: {Math.floor((time % 3600)/60)}</h1>
      <h1>seconds: {time % 60}</h1>

      {
        !isRunning ? (
          <button onClick={() => setIsRunning(true)}  >{time === 0 ? "Start" : "Resume"}</button>

        ) : (
          <button onClick={() => setIsRunning(false)}  >Pause</button>
        )
      }



      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0)
        }
        } >Reset</button>

    </>
  )
}

export default StopWatch