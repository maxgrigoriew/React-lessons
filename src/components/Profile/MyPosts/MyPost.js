import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = (props) => {
	//создаем ссылку на какой либо элемент
	
	let newPastElement = React.createRef();
	let myPostsItems = props.myPosts.map(item => <Post text={item.mes} id={item.id}/>)
	
	const addPosts = () => {
		props.addPost()
	}
	
	let onPostChange = () => {
		let text = newPastElement.current.value
		props.updateNewPostTest(text)
	}
	
	return (
		<div className={s.postsTop}>
			<div className={s.postsTop__inner}>
				<textarea onChange={onPostChange} ref={newPastElement} className={`bg-muted  ${s.textarea}`}
				          value={props.newPostText}
				></textarea>
				<button className={`btn btn-primary  ${s.button}`} type="button" onClick={addPosts}>Button
				</button>
			</div>
			{myPostsItems}
		</div>
	)
}
export default MyPost;