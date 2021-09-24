import './App.css';
import Head from "../Head/Head";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import { Route} from "react-router-dom";
import News from "../News/News";
import Mus from "../Mus/Mus";
import Settings from "../Settings/Settings";
function App(props) {
	
	return (
			<div className="app-wrapper">
				<Head/>
				<Nav navFrendsData={props.state.dialogsPage.navFrendsData}></Nav>
				<div className="app-wrapper-content">
					<Route path='/dialogs' component={() =>
						<Dialogs dialogs={props.state.dialogsPage.dialogs}
						         messages={props.state.dialogsPage.messages}
						         addMessage={props.addMessage}/>}/>
					<Route path='/profile' component={() =>
						<Profile profilePage={props.state.profilePage}
						         updateNewPostTest={props.updateNewPostTest}
						         addPost={props.addPost}/>}/>
					<Route path='/news' component={News}/>
					<Route path='/musik' component={Mus}/>
					<Route path='/settings' component={Settings}/>
				</div>
			</div>
	);
}
export default App
