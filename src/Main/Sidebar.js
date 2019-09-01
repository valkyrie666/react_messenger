import React from 'react';
import ContactList from './ContactList'

export default function Sidebar(props) {
	const {dialogs, handleChangeDialogId, selected} = props;
	return (
		<div className="Column-3 SideBar ZeroPadding">
		  <ContactList dialogs={dialogs} handleChangeDialogId={handleChangeDialogId} selected={selected} />
		</div>
	);
}