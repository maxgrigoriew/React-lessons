/** @format */

import './App.css';
import Head from '../Head/Head';
import Nav from '../Nav/Nav';
import ProfileContainer from '../Profile/ProfileContainer';
import {Route} from 'react-router-dom';
import News from '../News/News';
import UsersContainer from '../Users/UsersContainer';
import Mus from '../Mus/Mus';
import Settings from '../Settings/Settings';
import DialogsContainer from '../Dialogs/DialogsContainer';

function App(props) {
	return (
		<div className='app-wrapper'>
			<Head />
			<div className='main-wrapper'>
				<Nav
				// navFrendsData={
				// 	// props.store.getState().dialogsReducer.navFrendsData
				// }
				></Nav>
				<div className='app-wrapper-content'>
					<Route
						path='/dialogs'
						component={() => <DialogsContainer />}
					/>
					<Route
						path='/profile'
						component={() => <ProfileContainer />}
					/>
					<Route path='/news' component={News} />
					<Route
						path='/users'
						store={props.store}
						component={() => <UsersContainer />}
					/>
					<Route path='/musik' component={Mus} />
					<Route path='/settings' component={Settings} />
				</div>
			</div>
		</div>
	);
}

export default App;
