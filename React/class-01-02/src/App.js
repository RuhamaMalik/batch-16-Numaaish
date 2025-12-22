import { Component } from "react";


//////////////////////// Component 1

class App extends Component {
  constructor(prop) {
    super(prop)
  }

  render() {
    return (
      <div>
        <h1>Hello From App Component</h1>
        <p>Hello, mai aik class component hun</p>
      </div>
    )
  }

}


//////////////////////// Component 2


export class ComponentA extends Component {
  constructor(prop) { super(prop) }

  render() {
    return (
      <div>
        <h1>Mai Component A hun!</h1>
        <p>AAp kon ho???</p>
        <ul>
          <li>Component</li>
          <li>SPA</li>
          <li>VDom</li>
          <li>Babel-------transpiler</li>
          <li>JSX Expression</li>
          <li>V in MVC</li>
          <li>Unidirectional DataFlow --- One way data binding</li>
          <li>Props</li>
          <li>State ---- Heart of every component</li>
        </ul>
      </div>
    )
  }
}




export class ComponentB extends Component {
  constructor(prop) { super(prop) }

  render() {
    return (
      <div>
        <h1>Mai Component B hun!</h1>
        <p>Samajh Araha hai....!</p>
      </div>
    )
  }
}






export default App;