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
		  	<a href = "/login" onClick= {this.handleClick} className= "nav-link"> Sign in </a>
		  </li>)

		}else{
			return (<li className="nav-item nav-itemlst">
			<a href= "/" onClick = {this.handleLogout.bind(this)}className= "nav-link"> Logout</a>
		 </li>)
		}
		
	}

	render(){
		let loginButton;
		if(!Meteor.user()){
			loginButton = this.renderSignin('signin');
			console.log("sigin");
		}
		else if (Meteor.user()){
			loginButton = this.renderSignin('logout');
			console.log("logout");
		}
		// if(Meteor.user()  && this.state.signin == true){
		// 		loginButton = this.renderSignin('logout');
		// }
		// else if (Meteor.user() && this.state.signin == false){
		// 	this.setState({ signin: true});

		// }
		// else if (!Meteor.user() && this.state.signin == true){
		// 	this.setState({ signin: false});

		// }
		// else{
		// 	loginButton = this.renderSignin('signin');
		// }
		
		return(

			
			// if(Meteor.login())){
				// loginButton = ( <li className=" nav-itemlst nav-item">
		  //                 <a href = "/login" className= "nav-link"> Sign in </a>
		  //               </li>)
			// }else{
			// 	loginButton = (<li className="nav-item nav-itemlst">
		 //                  <a href= "#" onClick = {this.handleLogout}className= "nav-link"> Logout</a>
		 //        </li>)
			// }
			<div className = "container-fluid"> 
				<nav className="navbar navbar-expand-sm navbar-light bg-light mb-0">
					<div className = "title"> JOBHUNTER</div> 
			        <div className= "collapse navbar-collapse navbar-right" id = "navbar"> 
			            <ul className="navbar-nav w-100 ">
			                <li className="nav-item nav-itemlst">
			                  <a href = "/home" className= "nav-link"> Home </a>
			                </li>   
			                <li className="nav-item nav-itemlst">
			                  <a className= "nav-link"> About </a>
			                </li>
			                <li className="nav-item nav-itemlst">
			                  <a href = "/signup"className = "nav-link"> Sign up </a>
			                </li>
			                {loginButton}
			            </ul> 
			        </div>
	    		</nav>
    		</div> 
		);
	}		


}