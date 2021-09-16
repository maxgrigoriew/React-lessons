import React from "react";
import s from './Head.module.css'

const Head = () => {
	return(
		<header className={s.header}>
			<img className={s.logo} src="https://phonoteka.org/uploads/posts/2021-05/thumbs/1620314781_5-phonoteka_org-p-avatarki-s-prozrachnim-fonom-5.png" alt=""/>
			<span className={s.header__text}>My Social</span>
		</header>
	)
}
export default Head