import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


// function Ola(props) {
//   return <h1>{props.name} - {props.lastName}</h1>
// }

// const Ola = (props) => {
//   return <h1>{props.name} - {props.lastName}</h1>
// }

class Ola extends React.Component {
  render() {
    return <h1>{this.props.name} - {this.props.lastName} - {this.props.idade}</h1>
  }
}

let dadosBasicos1 = {
  nome: "Nome 01",
  sobrenome: "Teste 001",
  idade: 10
}
let dadosBasicos2 = {
  nome: "Nome 02",
  sobrenome: "Teste 002",
  idade: 20
}
let dadosBasicos3 = {
  nome: "Nome 03",
  sobrenome: "Teste 003",
  idade: 30
}

let enderecoResidencial1 = {
  rua: "Rua residencial 1"
}

let enderecoComercial1 = {
  rua: "Rua comercial 1"
}

class DadosBasicos extends React.Component {
  render() {

    return <h2>Dados Básicos -
      {this.props.dados.nome} -
      {this.props.dados.sobrenome} -
      {this.props.dados.idade}</h2>
  }
}

class Endereco extends React.Component {
  render() {
    return <h3>{this.tipo} - {this.props.endereco.rua}</h3>
  }

}

class DadosProfissionais extends React.Component {
  render() {
    return <h3>{this.props.ocupacao}</h3>
  }
}

// class Cadastro extends React.Component {
//   render() {
//     return <DadosBasicos dados={dadosBasicos}></DadosBasicos>
//   }
// }

root.render(
  <>
    <h1>Cadastro Simples</h1>
    <DadosBasicos dados={dadosBasicos1}></DadosBasicos>
    <Endereco tipo="Residencial" endereco={enderecoResidencial1}></Endereco>
    <Endereco tipo="Comercial" endereco={enderecoComercial1}></Endereco>
    <DadosProfissionais ocupacao="Bartender"></DadosProfissionais>
    <DadosProfissionais ocupacao="Programador"></DadosProfissionais>
    <DadosProfissionais ocupacao="Atendente"></DadosProfissionais>

    <DadosBasicos dados={dadosBasicos2}></DadosBasicos>
    <Endereco tipo="Residencial" endereco={enderecoResidencial1}></Endereco>
    <Endereco tipo="Comercial" endereco={enderecoComercial1}></Endereco>
    <DadosProfissionais ocupacao="Bartender"></DadosProfissionais>
    <DadosProfissionais ocupacao="Programador"></DadosProfissionais>
    <DadosProfissionais ocupacao="Atendente"></DadosProfissionais>

    <DadosBasicos dados={dadosBasicos3}></DadosBasicos>
    <Endereco tipo="Residencial" endereco={enderecoResidencial1}></Endereco>
    <Endereco tipo="Comercial" endereco={enderecoComercial1}></Endereco>
    <DadosProfissionais ocupacao="Bartender"></DadosProfissionais>
    <DadosProfissionais ocupacao="Programador"></DadosProfissionais>
    <DadosProfissionais ocupacao="Atendente"></DadosProfissionais>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();