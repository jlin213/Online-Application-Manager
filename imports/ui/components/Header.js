import React, { Component } 			from 'react';
import AccountsUIWrapper				from './AccountsUIWrapper.js'; 
export default class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<nav className="d-flex navbar navbar-light bg-light mb-0">
				<AccountsUIWrapper/>
				<div className="w-25">
				</div>
				<div className="justify-content-end align-self-center m-1">
	 				<h5>Online Application Manager</h5>
				</div>
			</nav>
		);
	}



}