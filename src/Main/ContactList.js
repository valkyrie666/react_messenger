import React from 'react';
import dialogs from '../json/dialogs.json'
import { Link } from 'react-router-dom';
import DialogBox from './DialogBox';

var createReactClass = require('create-react-class');

var CONTACTS = dialogs;


var Contact = createReactClass({
	render: function () {

		const {handleChangeDialogId, selected} = this.props;

		return ( 
			
		<li className="DialogElement" key={this.props.username}>
		<Link to={`/dialog/${this.props.id}`} onClick={handleChangeDialogId(this.props.id)}>
		  <div className="Dialog">
		    <div className="Row">
		      <div className="Column ZeroPadding DialogAvatar">
		        <img className="Avatar" src={this.props.image} alt={this.props.username} />
		      </div>
		      <div className="Column-8 ZeroPadding MessageWrap">
		        <div className="DialogPeer">
                  <span><b>{this.props.name}</b></span>
                </div>
                <div className="DialogPeer MessageText">
                  <span>{this.props.phoneNumber}</span>
                </div>
		      </div>
		      <div className="Column FullHeight">
                <span className="DateTime">00:00</span>
              </div>
		    </div>
		  </div>
		 </Link>
		</li>
		);
	}
})

var ContactList = createReactClass({

    getInitialState: function() {
		return {
			searchQuery: "",
		};
	},

    handleSearch: function(event) {
    	var searchQuery = event.target.value.toLowerCase();

    	this.setState({
    		searchQuery: searchQuery,
    	});
	},

	filterBySearch: function(searchQuery, contacts){
		return contacts.filter(function(el) {
    		var searchValue = el.name.toLowerCase();
    		return searchValue.indexOf(searchQuery) !== -1;
    	});
	},

	 render: function() {
	 	const {dialogs, handleChangeDialogId, selected} = this.props;
	 	const {searchQuery} = this.state;

	 	const displayedContacts = this.filterBySearch(searchQuery, dialogs);
		return(
		  <div className="FullHeight">
		  <div className="SearchFormWrapper">
		  <input type="text" onChange={this.handleSearch} className="SearchInput" placeholder="search..." />
          </div>
			<div className="DialogListWrapper">
			  <ul className="DialogList">
			     {
			  	    displayedContacts.map(function(el){
			  		return <Contact key={el.username} name={el.name} username={el.username}
			  		phoneNumber={el.phoneNumber} image={el.image} id={el.dialog_id} handleChangeDialogId={handleChangeDialogId} selected={selected} />;
			  	 })
			  }
			  </ul>
			</div>
		  </div>
		);
	}
})


export default ContactList;