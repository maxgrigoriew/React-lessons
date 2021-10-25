import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostContainer from "./MyPosts/MypostContainer";
import { connect } from 'react-redux';
import axios from 'axios';
import {setProfileAC} from './../../Redux/profile-reduser'

const Profile = (props) => {
	
	return (
		<div className={s.profile}>
			<ProfileInfo {...props}/>
			<MypostContainer/>
		</div>
	
	)
}

class ProfileContainer extends React.Component {
	componentDidMount() {
		// this.props.isTotalFetching(true);
		const apiUrl = `https:social-network.samuraijs.com/api/1.0/profile/2`
		axios.get(apiUrl).then((resp) => {
			console.log(resp)
			this.props.setProfile(resp.data);
			// this.props.isTotalFetching(false);
		});
	}
	render() {
		return (
			<Profile {...this.props}
			/>
		)
	}
}
let mapStateToProps = (state) => {
	return {
		profile: state.profileReducer.profile,
		
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		setProfile: (profile) => {
			return dispatch(setProfileAC(profile))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
