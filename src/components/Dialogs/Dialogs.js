import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {
	
	const dialogsItems = props.dialogs.map((item) => {
		return <DialogItem name={item.name} id={item.id}/>
	});
	
	const messagesItems = props.messages.map(item => <MessagesItem id={item.id} message={item.name}/>)
	return (
		
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsItems}
			</div>
			<div className="messages">
				{messagesItems}
				{/*<Message message={messages[0].name} id={messages[0].id}/>*/}
			</div>
		</div>
	)
}

export default Dialogs;