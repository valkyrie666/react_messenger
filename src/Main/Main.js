import React from 'react';
import Sidebar from './Sidebar';
import DialogBox from './DialogBox';
import dialogs from '../json/dialogs.json';
import MESSAGES from '../json/messages.json';

class Main extends React.PureComponent{
	constructor(props){
		super(props);
		const pathArray = window.location.pathname.split("/");
		this.state = {
			dialog_id: pathArray[pathArray.length - 1] || null,
		    messages: MESSAGES
		}
	}

	state = {
		dialog_id: null,
		messages: MESSAGES
	};

	getMessagesById(id){
		return this.state.messages.filter(({dialog_id})=>dialog_id === id);
	}

	handleChangeDialogId(id){
		return () => this.setState({dialog_id: id});
	}

	handleMessageInput(message){
		console.log(message);
		this.setState({messages: [...this.state.messages, message]});
	}

	render(){
		const {dialog_id} = this.state;
		const messages = this.getMessagesById(dialog_id);

		return (
			<div className="Row Main ContentAlignStretch">
			<Sidebar dialogs={dialogs} handleChangeDialogId={(event) => this.handleChangeDialogId(event)} selected={dialog_id} />
			<DialogBox messages={messages} handleMessageInput={(event) => this.handleMessageInput(event)} selected_dialog_id={dialog_id} />
			</div>
		);
	}
}

export default Main;