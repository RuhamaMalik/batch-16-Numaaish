// import './App.css'
// import useOnlineStatus from './customHook/useOnlineStatus'
// import Products from './Products';
// import Users from './Users';
// import LearnUseReducer from './LearnUseReducer'
// const App = () => {
// const isOnline = useOnlineStatus();
// console.log(isOnline);

// return (
//   <>
{/* <LearnUseReducer/> */ }
{/* <h1>{isOnline ? "Online":"Offline"}</h1> */ }

{/* <Users/>
          <Products/> 
          */}



//     </>
//   )
// }

// export default App



///////////////// lazy loading - suspense


import React, { Suspense,lazy } from 'react'
// import Lazy from './Lazy'

// const Lazy = React.lazy(() => import("./Lazy"))
const Lazy =  lazy(() => import("./Lazy"))

const App = () => {
  return (
    <>

      <h1>Learn Lazy Loading</h1>

      <Suspense fallback={<Skeleton/>}  >
        <Lazy />
      </Suspense>
      <h1></h1>

     
    </>
  )
}

export default App;


const Skeleton =()=>{
  return(
    

<div role="status" class="max-w-sm p-4 border border-default rounded-base shadow-xs animate-pulse md:p-6">
    <div role="status" class="flex items-center justify-center h-48 max-w-sm bg-neutral-quaternary rounded-base animate-pulse mb-4 sm:mb-6">
        <svg class="w-11 h-11 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM9 12h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm5.697 2.395v-.733l1.269-1.219v2.984l-1.268-1.032Z"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
    <div class="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full mb-2.5"></div>
    <div class="h-2 bg-neutral-quaternary rounded-full"></div>
    <div class="flex items-center mt-4">
        <svg class="w-8 h-8 text-fg-disabled me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
        <div>
            <div class="h-2.5 bg-neutral-quaternary rounded-full w-32 mb-2"></div>
            <div class="w-48 h-2 bg-neutral-quaternary rounded-full"></div>
        </div>
    </div>
    <span class="sr-only">Loading...</span>
</div>



  )
}