import React from "react";
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className={s.profile}>
			<ProfileInfo/>
			<MyPost myPosts={props.myPosts} />
		</div>
	
	)
}
export default Profile;