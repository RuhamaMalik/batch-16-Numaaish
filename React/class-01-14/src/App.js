// import { Component } from "react";
// import Gallery from "./components/styleClass/gallery/Gallery";
// import Gallery2 from "./components/styleClass/gallery/Gallery2";
// import Header from "./components/styleClass/header/Header";
// import Style from "./components/styleClass/styles/style";
// import Main from "./components/props/Main";

import Main from "./components/liftingStateUp/Main"
import Form from "./components/liftingStateUp/multiStepForm/Form"

// import Main from "./components/hooks/Main"
// import Main from "./components/routing/Main"
// import Main from "./components/routing2/Main"

//////////////////////// Component 1

// class App extends Component {
//   constructor(prop) {
//     super(prop)
//   }

//   render() {
//     return (
//       <>

//         <Header />

//         <br />
//         <hr />

//         <Style />

//         <br />
//         <hr />

//         <Gallery2 />

//         <br />
//         <hr />

//         <Gallery />

//         <br />
//         <hr />
//         <ComponentA />
//         <br />
//         <hr />
//         <ComponentB />
//         <br />
//         <hr />
//         <h1>Hello From App Component</h1>
//         <p>Hello, mai aik class component hun</p>
//       </>

//     )
//   }

// }


//////////////////////// Component 2


// export class ComponentA extends Component {
//   constructor(prop) { super(prop) }

//   render() {
//     return (
//       <div>
//         <h1>Mai Component A hun!</h1>
//         <p>AAp kon ho???</p>
//         <ul>
//           <li>Component</li>
//           <li>SPA</li>
//           <li>VDom</li>
//           <li>Babel-------transpiler</li>
//           <li>JSX Expression</li>
//           <li>V in MVC</li>
//           <li>Unidirectional DataFlow --- One way data binding</li>
//           <li>Props</li>
//           <li>State ---- Heart of every component</li>
//         </ul>
//       </div>
//     )
//   }
// }




// export class ComponentB extends Component {
//   constructor(prop) { super(prop) }

//   render() {
//     return (
//       <div>
//         <h1>Mai Component B hun!</h1>
//         <p>Samajh Araha hai....!</p>
//       </div>
//     )
//   }
// }

// ComponentDidMount() ---- create
// ComponentDidUpdate() --- update
// ComponentWillUnmount --- destroy




//////////////////////////////////////////////




const App = () => {

  return (
    <>

      {/* <Main />  --------Props */}

      {/* <Main />  -------- Hooks */}

      {/* <Main /> -------- Routing 1  */}

      {/* <Main /> -------- Routing 2  */}

      {/* <Main /> */}


      <Form />
    </>
  )
}

export default App