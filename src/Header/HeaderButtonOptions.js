import React from 'react';

export default function HeaderButtonOptions() {

  function toggleDropdown(e) {
      e.preventDefault();
      document.getElementById('OptionsDrop').classList.toggle("Show");
    }

	return (
		<div className="Column-1 ZeroPadding FullHeight">
          <a className="Button BigPadding DropdownBtn" href="#" onClick={toggleDropdown}>
            <img src="img/dots-white.png" className="Glyph" alt="Options" />
          </a>
          <ul className="DropdownMenu ChatMenu" id="OptionsDrop">
            <li>
              <a className="DropdownElement Button" href="">Select Messages</a>
            </li>
            <li>
              <a className="DropdownElement Button" href="">Photos</a>
            </li>
            <li>
              <a className="DropdownElement Button" href="">Videos</a>
            </li>
            <li>
              <a className="DropdownElement Button" href="">Files</a>
            </li>
            <li>
              <a className="DropdownElement Button" href="">Audio</a>
            </li>
          </ul>
        </div>
	);
}