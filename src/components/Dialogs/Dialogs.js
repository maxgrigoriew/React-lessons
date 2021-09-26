import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {
	addDialogsMessageCreator,
	addMessageCreator1,
	updateDialogsNewMessageCreator1,
	updateDialogsNewMessageCreator,
} from "../../Redux/dialogs-reduser";

const Dialogs = (props) => {
	
	const dialogsItems = props.dialogs.map((item) => {
		return <DialogItem name={item.name} id={item.id} img={item.img} number={item.number}/>
	});
	
	const messagesItems = props.messages.map(item => <MessagesItem id={item.id} message={item.name}/>)

	let addMessage = () => {
		props.dispatch(addDialogsMessageCreator())
	}
	let onPostChange = (e) => {
		let text = e.target.value
		props.dispatch(updateDialogsNewMessageCreator(text))
	}
	
	let addPost1 = () => {
		props.dispatch(addMessageCreator1())
		
	}
	let onPostChange1 = (e) => {
		let body = e.target.value
		console.log(body)
		props.dispatch(updateDialogsNewMessageCreator1(body))
	}
	return (
		<div>
			<div className={s.dialogs}>
				<div className={s.dialogsItems}>
					{dialogsItems}
				</div>
				<div className="messages">
					{messagesItems}
				</div>
			</div>
			<div className={s.wrapper}>
			
				<textarea value={props.newMessage}
				          onChange={onPostChange}
				          className={`w-100 ${s.textarea}`}></textarea>
				<button onClick={addMessage} className='btn btn-primary mb-2'>add post</button>
				
				
				<textarea className={'w-100 pt-lg-2 d-block mb-2'} value={props.newMessage1} onChange={onPostChange1}></textarea>
				<button className= 'btn btn-primary' onClick={addPost1}>ADD POST1</button>
		
			</div>
		</div>
	)
}

export default Dialogs;