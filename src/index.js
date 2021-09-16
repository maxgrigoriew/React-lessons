import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

let dialogs = [
	{id: 1, name: 'Max'},
	{id: 2, name: 'Nikos'},
	{id: 3, name: 'Anya'},
];

let messages = [
	{id: 1, name: 'Hallo'},
	{id: 2, name: 'By'},
	{id: 3, name: 'You'},
];

let myPosts = [
	{id:1, mes: 'hello'},
	{id:2, mes: 'how are you?'}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} myPosts={myPosts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
