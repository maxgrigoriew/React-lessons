import './App.css';
import Head from "../Head/Head";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "../News/News";
import Mus from "../Mus/Mus";
import Settings from "../Settings/Settings";
import store from "../../Redux/state";

function App(props) {
	debugger
	return (
		<div className="app-wrapper">
			<Head/>
			<div className="main-wrapper">
				<Nav navFrendsData={props.store.state.dialogsPage.navFrendsData}></Nav>
				<div className="app-wrapper-content">
					<Route path='/dialogs' component={() =>
						<Dialogs dialogs={props.store.state.dialogsPage.dialogs}
						         newMessage={props.store.state.dialogsPage.newMessages}
						         newMessage1={props.store.state.dialogsPage.newMessages1}
						         messages={props.store.state.dialogsPage.messages}
						         dispatch={props.store.dispatch.bind(store)}/>}/>
					<Route path='/profile' component={() =>
						<Profile profilePage={props.store.state.profilePage}
						         dispatch={props.store.dispatch.bind(store)}/>}/>
					<Route path='/news' component={News}/>
					<Route path='/musik' component={Mus}/>
					<Route path='/settings' component={Settings}/>
				</div>
			</div>
		</div>
	);
}

export default App
