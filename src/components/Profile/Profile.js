import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostContainer from "./MyPosts/MypostContainer";

const Profile = (props) => {
	
	return (
		<div className={s.profile}>
			<ProfileInfo/>
			<MypostContainer store={props.store}
			/>
		</div>
	
	)
}
export default Profile;