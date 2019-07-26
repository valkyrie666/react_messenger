import React from 'react';
import HeaderLabel from './HeaderLabel'
import HeaderCenter from './HeaderCenter'
import HeaderButtonSearch from './HeaderButtonSearch'
import HeaderButtonOptions from './HeaderButtonOptions'

export default function Header() {
	return (
		<div className="Header TopZero ZeroPadding">
		  <div className="Row ContentAlignStretch FullHeight">
		    <HeaderLabel />
		    <HeaderCenter />
		    <HeaderButtonSearch />
		    <HeaderButtonOptions />
		  </div>
		</div>
	)
}