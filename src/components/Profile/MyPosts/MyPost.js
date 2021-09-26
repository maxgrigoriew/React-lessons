import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {addPostCreater, onPostChangeCreater} from "../../../Redux/profile-reduser";

const MyPost = (props) => {
	//создаем ссылку на какой либо элемент
	let newPastElement = React.createRef();
	let myPostsItems = props.myPosts.map(item => <Post text={item.mes} id={item.id}/>)
	
	const addPosts = () => {
		props.dispatch(addPostCreater())
	}
	
	let onPostChange = () => {
		let text = newPastElement.current.value
		props.dispatch(onPostChangeCreater(text))
	}
	
	return (
		<div className={s.postsTop}>
			<div className={s.postsTop__inner}>
				<textarea onChange={onPostChange}
				          ref={newPastElement}
				          className={`bg-light ${s.textarea}`}
				          value={props.newPostText}
				></textarea>
				<button className={`btn btn-primary`}
				        type="button"
				        onClick={addPosts}>Button
				</button>
			</div>
			{myPostsItems}
		</div>
	)
}
export default MyPost;