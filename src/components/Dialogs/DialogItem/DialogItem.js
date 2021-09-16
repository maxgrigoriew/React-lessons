import {NavLink} from "react-router-dom";
import React from "react";
import s from './DialogItem.module.css'

const DialogItem = (props) => {
	let path = `/dialogs/${props.id}`
	
	return (
		<div className={s.dialogItem}>
			<NavLink to={path}>
				{props.name}
			</NavLink>
		</div>
	)
}
export default DialogItem