import React from "react";
import s from './Post.module.css'

const Post = ({text, id}) => {
	return (
		<div className={s.post}>
			<img src="http://all-photoshop.ru/uploads/posts/2010-08/1282449765_zjovo9hgwjrcqfk.jpeg" alt=""/>
			<div className={s.post__text}>
				<p className="text" >{text}</p>
			</div>
		</div>
	)
}
export default Post;