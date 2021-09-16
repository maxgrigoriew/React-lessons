import './App.css';
import Head from "../Head/Head";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "../News/News";
import Mus from "../Mus/Mus";
import Settings from "../Settings/Settings";

function App(props) {
	
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Head/>
				<Nav/>
				<div className="app-wrapper-content">
					<Route path='/dialogs' component={() =>
						<Dialogs dialogs={props.appState.dialogs}
						         messages={props.appState.messages}/>}/>
					<Route path='/profile' component={() =>
						<Profile myPosts={props.appState.myPosts}/>}/>
					<Route path='/news' component={News}/>
					<Route path='/musik' component={Mus}/>
					<Route path='/settings' component={Settings}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App
