import React from 'react';
import messages from '../json/messages.json';

var MESSAGES = messages;

var createReactClass = require('create-react-class');

var Message = createReactClass({
  render: function () {
    return(
      <div className="Message">
        <div className="Row MessageInner">
          <div className="Column ZeroPadding DialogAvatar">
            <img className="Avatar" src={this.props.image} alt={this.props.username} />
          </div>
          <div className="Column-10 ZeroPadding MessageWrap">
            <div className="DialogPeer">
              <span><b>{this.props.name}</b></span>
            </div>
            <div className="DialogPeer MessageText">
              <p>{this.props.text}</p>
            </div>
          </div>
          <div className="Column FullHeight Timestamp BigPadding">
            <span className="DateTime">00:00</span>
          </div>
        </div>
      </div>
    );
  }
})

var DialogBox = createReactClass({

  getInitialState: function() {
    return {
      displayedMessages: MESSAGES
    };
  },

	 render: function()  {

    return (
		<div className="Column-9 ZeroPadding DialogBoxWrapper">

		  <div className="DialogBox ZeroPadding force-overflow">
        {
            this.state.displayedMessages.map(function(el){
               return <Message key={el.id} name={el.user.name} username={el.user.username}
            image={el.user.image} text={el.text} username={el.user.username} />;
           })
        }
		  </div>

		  <div className="MessageBox TextAlignCenter">
      <form>
		    <label htmlFor="text" className="inp">
              <input type="text" id="text" placeholder="&nbsp;" />

              <input type="hidden" id="dialog_id" value="1" />
              <input type="hidden" id="from" value="Kseniya" />
              <input type="hidden" id="to" value="" />

              <span className="label">Type message here...</span>
              <span className="border"></span>
            </label>
            <button className="SendButton">
            SEND
            </button>
            </form>
          </div>
		</div>
	)}
});

export default DialogBox;