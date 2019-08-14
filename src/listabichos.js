import React, { Component } from 'react';
import logo from './logo.svg';
import {insectos, insectos2, peces, submarinos} from './datajson/insectos.js';
import './acstyle.css';
import './css/bootstrap.min.css';

// const tablaRow = insectos2.map((insec) => (

//     <tr>
//         <td>{insec.imagen}</td>
//         <td>{insec.insecto}</td>
//         <td>{insec.bayas}</td>
//         <td>{insec.ubicacion}</td>
//         <td>{insec.meses}</td>
//         <td>{insec.horas}</td>
//     </tr>
// ))
// https://menubar.io/reactjs-tables/

// const obj = [{
//     name: "onion",
//     price: ".99",
//     id: 1
//   }, {
//     name: "pepper",
//     price: "1.25",
//     id: 2
//   }, {
//     name: "broccoli",
//     price: "3.00",
//     id: 3
//   }];
{/* <td key={data.imagen}>{data.imagen}</td>
<td key={data.insecto}>{data.insecto}</td>
<td key={data.bayas}>{data.bayas}</td>
<td key={data.ubicacion}>{data.ubicacion}</td>
<td key={data.meses}>{data.meses}</td>
<td key={data.horas}>{data.horas}</td> */}
  
  class TableRow extends React.Component {
    render() {
      const {data} = this.props;
      const row = data.map((data) =>
      
        <tr>
            <td key={data.Imagen}><img src={'images/'+data.Imagen} width="50px" /></td>
            <td key={data.Insecto}>{data.Insecto}</td>
            <td key={data.bayas}>{data.Bayas}</td>
            <td key={data.ubicacion}>{data.Ubicacion}</td>
            <td key={data.meses}>{data.Meses}</td>
            <td key={data.horas}>{data.Horas}</td>
        </tr>
      );
      return (
        <tbody class="table-dark">{row}</tbody>
      );
    }
  }
  
  class ListaBichos extends React.Component {
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

                

                
                <TableRow data={this.props.data} />
                
              </table>
            </div>
        </div>
      );
    }
  }


  export {ListaBichos, insectos2}