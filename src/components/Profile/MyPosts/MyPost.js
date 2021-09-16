import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {

	let myPostsItems = props.myPosts.map(item => <Post text={item.mes} id={item.id}/>)
	return (
		<div className={s.postsTop}>
			<div className={s.postsTop__inner}>
				<textarea className={`bg-muted  ${s.textarea}`} placeholder="введи текст"></textarea>
				<button className={`btn btn-primary me-md-2 ${s.button}`}type="button">Button</button>
			</div>
			{myPostsItems}
		</div>
	)
}
export default MyPost;