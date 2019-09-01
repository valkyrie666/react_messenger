import React from 'react';
import messages from '../json/messages.json';

var MESSAGES = messages;
let ID = 4;

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

    generateMessageId: function(){
      return String(ID++);
    },

    getInitialState: function() {
      return {
        displayedMessages: MESSAGES,
        inputValue: "",
        originContact: {
          user: {
            name: "Darth Vader",
            username: "darthvader",
            image: "https://plamoya.com/bmz_cache/6/68b4c262199124941280f57f771ee79f.image.500x500.jpg"
          },
          timestamp: "00:00"
        },
      };
    },

    handleInputSend: function(event){
      const message = {
        ...this.state.originContact,
        id: this.generateMessageId(),
        text: this.state.inputValue,
        dialog_id: this.props.selected_dialog_id
      };
      this.props.handleMessageInput(message);
      this.setState({inputValue: ""});
    },

    handleInput: function(event){
      this.setState({inputValue: event.currentTarget.value});
    },

    render: function()  {
      const {messages, handleMessageInput} = this.props;

      return (
      <div className="Column-9 ZeroPadding DialogBoxWrapper">

      <div className="DialogBox ZeroPadding force-overflow">
      {
        messages.map(function(el){
         return <Message key={el.id} name={el.user.name} username={el.user.username}
         image={el.user.image} text={el.text} username={el.user.username} />;
       })
     }
     </div>

     <div className="MessageBox TextAlignCenter">

     <label htmlFor="text" className="inp">
     <input type="text" id="text" placeholder="&nbsp;" onChange={this.handleInput} value={this.state.inputValue} />

     <span className="label">Type message here...</span>
     <span className="border"></span>
     </label>
     <button className="SendButton" onClick={this.handleInputSend}>
     SEND
     </button>
     </div>
     </div>
     )}
   });

   export default DialogBox;