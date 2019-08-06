import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './acstyle.css';
import './css/bootstrap.min.css';

const testing = 
  <p>Guía de Criaturas, Peinados... en Animal Crossing AC</p>;

class Tablas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table1 : 'none',
      table2 : 'none'
    }
  }
  showTable1() {
    if (this.state.table1 === 'none') {
      this.setState({
        table1 : 'block',
        table2 : 'none'
      }) 
    }
    else if (this.state.table1 === 'block') {
      this.setState({
        table1 :'none',
        table2 : 'none'
      })
    }
  }

  showTable2() {
    if (this.state.table2 === 'none') {
      this.setState({
        table2 : 'block',
        table1 :'none',
      }) 
    }
    else if (this.state.table2 === 'block') {
      this.setState({
        table2 :'none',
        table1 : 'none'
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
      <div id="tablas-bichos" style={{display:this.state.table1}}>
      <ListaBichos />
      </div>
      
    </div>
    );
  }
};


class ListaBichos extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <div class="table-responsive">
            <table class="table w-auto" >
              <thead class="table-dark">
                <tr>
                  <th class="th-lg">Imagen</th>
                  <th class="th-lg">Insecto</th>
                  <th class="th-lg">Bayas</th>
                  <th class="th-lg">Ubicacion</th>
                  <th class="th-lg">Meses</th>
                  <th class="th-lg">Horas</th>
                </tr>
              </thead>

              <tbody class="table-dark">
                <tr>
                  <td><img src='' width="50px" /></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <table class="table w-auto" >
              <thead class="table-dark">
                <tr>
                  <th class="th-lg">Imagen</th>
                  <th class="th-lg">Pez</th>
                  <th class="th-lg">Bayas</th>
                  <th class="th-lg">Ubicacion</th>
                  <th class="th-lg">Meses</th>
                  <th class="th-lg">Horas</th>
                </tr>
              </thead>
              <tbody class="table-dark">
                <tr>
                  <td><img src='' width="50px" /></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <table class="table w-auto" >
              <thead class="table-dark">
                <tr>
                  <th class="th-lg">Imagen</th>
                  <th class="th-lg">Animal Submarino</th>
                  <th class="th-lg">Bayas</th>
                  <th class="th-lg">Tamaño Sombra</th>
                  <th class="th-lg">Meses</th>
                  <th class="th-lg">Horas</th>
                </tr>
              </thead>
              <tbody class="table-dark">
                <tr>
                  <td><img src='' width="50px" /></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
  }
}

class Cuerpo extends Component {
  constructor(props) {
    super(props);
  }
  



  render() {
    return (
    <div class="container limiter">
      {testing}
     <Tablas />
    </div>
    );
  }
};


export default Cuerpo;

