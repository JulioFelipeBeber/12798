import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


class Lista extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dados: [{
        "cep": "20260-080",
        "logradouro": "xpto",
        "complemento": "até 392/393",
        "bairro": "abc",
        "localidade": "Curitiba",
        "uf": "RJ"
      },
      {
        "cep": "20260-080",
        "logradouro": "xpto 01",
        "complemento": "até 392/393",
        "bairro": "jk",
        "localidade": "Curitiba",
        "uf": "RJ"
      },
      {
        "cep": "20260-080",
        "logradouro": "xpto 02",
        "complemento": "até 392/393",
        "bairro": "jk",
        "localidade": "Curitiba",
        "uf": "RJ"
      }]
    }
  }

  componentDidMount() {

    

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Opa!!</h1>
        {this.state.dados.map((registro, index) =>
          <Endereco key={index} numero={index} endereco={registro}></Endereco>)}
      </div>
    )
  }
}


class Endereco extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <h2>Endereço nrº: {this.props.numero + 1}</h2>
        <p>{this.props.endereco.logradouro}</p>
        <p>{this.props.endereco.cep}</p>
        <p>{this.props.endereco.complemento}</p>
        <p>{this.props.endereco.bairro}</p>
        <p>{this.props.endereco.localidade}</p>
        <p>{this.props.endereco.uf}</p>
      </>
    )
  }


}

root.render(
  <Lista />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();