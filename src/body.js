import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './acstyle.css';

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


const testing = 
  <p>Guía de Criaturas, Peinados... en Animal Crossing AC</p>;

// const hairstyles =
//   <div id="imagen-peinados" style={{display:table2}}>
//     <img src="images/peinados_.png" class="img-fluid" />
//     <img src="images/colores_.png" class="img-fluid" />
//   </div>;
class Tablas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table1 : 'none',
      table2 : 'none'
    }
  }
  showTable1() {
    this.setState({
      table1 : 'block'
    })
  }

  showTable2() {
    if (this.state.table2 === 'none') {
      this.setState({
        table2 : 'block'
      }) 
    }
    else if (this.state.table2 === 'block') {
      this.setState({
        table2 :'none'
      })
    }
  }

  render() {
    return (
    <div>
      <button class="button button2" onClick={this.showTable1.bind(this)}> Lista de Bichos  </button>
      <button class="button button1" onClick={this.showTable2.bind(this)}>Peinados</button>
 
      <div id="imagen-peinados" style={{display:this.state.table2}}>
        <img src="images/peinados_.png" class="img-fluid" />
        <img src="images/colores_.png" class="img-fluid" />
      </div>;
    </div>
    );
  }
};

class Cuerpo extends Component {
  constructor(props) {
    super(props);
  }
  



  render() {
    return (
    <div>
      {testing}
     <Tablas />
    </div>
    );
  }
};


export default Cuerpo;

