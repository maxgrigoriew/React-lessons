import store from "./Redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";

let renderEntireThree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<App store={store}
			/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

renderEntireThree(store.getState())

store.subscribe(renderEntireThree)

