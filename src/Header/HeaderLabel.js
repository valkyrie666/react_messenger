import React from 'react';

export default function HeaderLabel() {

  function toggleDropdown(e) {
      e.preventDefault();
      document.getElementById('Dropdown').classList.toggle("Show");
    }

	return (
		<div className="Column-3 ZeroPadding FullHeight">
		  <a className="Button BigPadding DropdownBtn" href="" onClick={toggleDropdown}>
		    <i>Messenger Title</i>
		  </a>
		  <ul className="DropdownMenu MainMenu" id="Dropdown">
            <li>
              <a className="DropdownElement Button" href="">New Chat</a>
            </li>
            <li>
              <a className="DropdownElement Button" href="">New Group</a>
            </li>
            <li>
              <a className="DropdownElement Button" href="">Contacts</a>
            </li>
            <li>
              <a className="DropdownElement Button" href="">Settings</a>
            </li>
            <li>
              <a className="DropdownElement Button" href="">Log Out</a>
            </li>
          </ul>
		</div>
	);
}