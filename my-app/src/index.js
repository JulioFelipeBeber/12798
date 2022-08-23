import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name= 'ddd'

function FormatName(user){

  return user.firstName + ' - ' + user.lastName;
}

const user = {
  firstName:'Julio',
  lastName: 'Felipe'

}

const element= (
  <>
  <h1>Hello, {FormatName(user)}</h1>
  <h1>Hello, {FormatName(user)}</h1>
  </>
)

root.render(
  element
)


//root.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
