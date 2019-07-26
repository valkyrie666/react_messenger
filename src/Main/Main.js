import React from 'react';
import Sidebar from './Sidebar';
import DialogBox from './DialogBox'

export default function Main() {
	return (
		<div className="Row Main ContentAlignStretch">
		  <Sidebar />
		  <DialogBox />
		</div>
	);
}