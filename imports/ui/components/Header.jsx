import React, { Component } 			from 'react';
import { Meteor } 						from 'meteor/meteor';
import { FlowRouter } 					from 'meteor/kadira:flow-router';
export default class Header extends Component{
	constructor(props){
		super(props);
		this.state ={
			loggedin: false,
			loggedout: true,
		};
		this.handleLogout = this.handleLogout.bind(this);
		this.renderSignin = this.renderSignin.bind(this);
		this.renderAbout = this.renderAbout.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	getUser(){
		return Meteor.user();
	}


	handleLogout(){
		Meteor.logout(() => {
			this.setState({loggedin: false});
		}
		);
	}	
	handleClick(){	
		if(Meteor.user() && !this.state.loggedin){
			this.setState({loggedin: true})
		}
	}

	renderSignin(value){
		if (value == 'signin'){
			return (<li className=" nav-itemlst nav-item">
		  	<a href = "/login" onClick = {this.handleClick}className= "nav-link"> Sign in </a>
		  </li>)

		}else{
			return (<li className="nav-item nav-itemlst">
			<a href= "/" onClick = {this.handleLogout.bind(this)}className= "nav-link"> Logout</a>
		 </li>)
		}
	}

	renderAbout(value){
		if(value == 'signin'){
			return (<li className=" nav-itemlst nav-item">
		  	<a href = "/about" className= "nav-link"> About </a>
		  </li>)

		}else{
			return (<li className="nav-item nav-itemlst">
			<a href= "/dashboard" className= "nav-link"> Profile </a>
		 </li>)
		}
	}

	renderSignUp(){
		return (
			<li className="nav-item nav-itemlst">
			   <a href = "/signup" className = "nav-link"> Sign up </a>
			</li>
		)
		
	}


	render(){
		let loginButton;
		let aboutButton; 
		let signupButton; 
		if(!Meteor.user()){
			loginButton = this.renderSignin('signin');
			aboutButton = this.renderAbout('signin');
			signupButton = this.renderSignUp();
			console.log("sigin");
		}
		else if (Meteor.user()){
			loginButton = this.renderSignin('logout');
			aboutButton = this.renderAbout('logout');
			console.log("logout");
		}
		return(
			<div className = "container-fluid"> 
				<nav className="navbar navbar-expand-sm navbar-light bg-light mb-0">
					<div className = "title"> JOBHUNTER</div> 
			        <div className= "collapse navbar-collapse navbar-right" id = "navbar"> 
			            <ul className="navbar-nav w-100 ">
			                <li className="nav-item nav-itemlst">
			                  <a href = "/home" className= "nav-link"> Home </a>
			                </li>   
			                {aboutButton}
			                {this.state.loggedin ? null : signupButton}
			                {loginButton}
			            </ul> 
			        </div>
	    		</nav>
    		</div> 
		);
	}		


}