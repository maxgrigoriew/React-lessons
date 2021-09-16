import React from "react";
import s from "../Dialogs.module.css";


const MessagesItem = ({message}) => {
	return (
		<div className={s.message}>{message}</div>
	);
}

export default MessagesItem