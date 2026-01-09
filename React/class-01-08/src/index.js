import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App,{ComponentA, ComponentB} from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <ComponentB /> */}
    <App />
    {/* <ComponentA /> */}

    </BrowserRouter>
    
  </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div>Hello class kesi hai React?

//     <h1>My Dimagh ki dahi + Future Lassi</h1>

//   </div>

// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
