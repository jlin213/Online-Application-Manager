import React, { Component } 			from 'react';
import AccountsUIWrapper				from './AccountsUIWrapper.js'; 
import { Meteor } 						from 'meteor/meteor';

export default class Header extends Component{
	constructor(props){
		super(props);
	}

	getUser(){
		return Meteor.user();
	}
	handleLogout(){
		Meteor.logout();
	}	
	render(){
		return(
			if(getUser()){
				loginButton = ( <li className=" nav-itemlst nav-item">
		                  <a href = "/login" className= "nav-link"> Sign in </a>
		                </li>)
			}else{
				loginButton = (<li className="nav-item nav-itemlst">
		                  <a href= "#" onClick = {this.handleLogout}className= "nav-link"> Logout</a>
		        </li>)
			}
			<nav className="navbar navbar-expand-sm navbar-light bg-light d-flex mb-0 ">
		        <div className= "collapse navbar-collapse" id = "navbar"> 
		            <ul className="navbar-nav ml-auto">
		 				<li id="title"> JOBHUNTER</li>
		                <li className="nav-item nav-itemlst">
		                  <a className= "nav-link"> Home </a>
		                </li>   
		                <li className="nav-item nav-itemlst">
		                  <a className= "nav-link"> About </a>
		                </li>
		                <li className="nav-item nav-itemlst">
		                  <a className = "nav-link"> Sign up </a>
		                </li>
		                {loginButton}
		            </ul> 
		        </div>
		        <div style={{float : 'right', paddingRight : '7px'}}>
				    	<AccountsUIWrapper/>
				</div>

    		</nav>
		);
	}



}