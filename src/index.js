import  { subscribe, addMessage, updateNewPostTest, addPost} from "./Redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import App from "./components/App/App";
import state from "./Redux/state"
import num from "./Redux/state"

let renderEntireThree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App appState={state}
			     addPost={addPost}
			     addMessage={addMessage}
			     updateNewPostTest={updateNewPostTest}
			/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

renderEntireThree(state)

subscribe(renderEntireThree)

