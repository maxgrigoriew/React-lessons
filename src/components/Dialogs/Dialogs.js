import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessagesItem/MessagesItem";

const Dialogs = (props) => {
	
	const dialogsItems = props.dialogs.map((item) => {
		return <DialogItem name={item.name} id={item.id} img={item.img} number={item.number}/>
	});
	
	const messagesItems = props.messages.map(item => <MessagesItem id={item.id} message={item.name}/>)
	let element = React.createRef()
	
	let addMessage = () =>{
		let text = element.current.value
		props.addMessage(text)
		
	}
	return (
		<div>
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsItems}
			</div>
			<div className="messages">
				{messagesItems}
				{/*<Message message={messages[0].name} id={messages[0].id}/>*/}
			</div>
		</div>
		<div className={s.wrapper}>
			<textarea ref={element} className={`w-100 ${s.textarea}`}></textarea>
			<button onClick={addMessage} className='btn btn-primary'>add post</button>
		</div>
		</div>
	)
}

export default Dialogs;