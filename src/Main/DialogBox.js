import React from 'react';

export default function DialogBox() {


	return (
		<div className="Column-9 ZeroPadding DialogBoxWrapper">

		  <div className="DialogBox ZeroPadding">
		    
            
		  </div>

		  <div className="MessageBox TextAlignCenter">
		    <label htmlFor="text" className="inp">
              <input type="text" id="text" placeholder="&nbsp;" />

              <input type="hidden" id="dialog_id" value="1" />
              <input type="hidden" id="from" value="Kseniya" />
              <input type="hidden" id="to" value="" />

              <span className="label">Type message here...</span>
              <span className="border"></span>
            </label>
            <button>
            send
            </button>
          </div>
		</div>
	);
}