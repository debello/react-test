import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Hello React!!
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

let testing = <p>Hello this is dog</p>;
class TypesOfFood extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='App-header'>
        <h1 >Types of Food:{testing}</h1>
        {/* change code below this line */}
        <p >This is React, Lovin it!</p>
        {/* change code above this line */}
      </div>
    );
  }
};


export default TypesOfFood;
