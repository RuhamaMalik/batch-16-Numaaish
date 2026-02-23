import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './components/AddTask'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <h1 className='text-7xl font-bold'>Learn Redux</h1>

      <AddTask />
      <Todo/>
    </>
  )
}

export default App
