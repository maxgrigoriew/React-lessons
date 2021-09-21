import React from "react";
import s from './Profile.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	
	return (
		<div className={s.profile}>
			<ProfileInfo/>
			<MyPost myPosts={props.profilePage.myPosts}
			        newPostText={props.profilePage.newPostText}
			        updateNewPostTest={props.updateNewPostTest}
			        addPost={props.addPost}/>
		</div>
	
	)
}
export default Profile;