import React, { Component } 			from 'react';
import AccountsUIWrapper				from './AccountsUIWrapper.js'; 
export default class Header extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
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
		                <li className="nav-item nav-itemlst">
		                  <a className= "nav-link"> Sign in </a>
		                </li>
		            </ul> 
		        </div>
		        <div style={{float : 'right', paddingRight : '7px'}}>
				    	<AccountsUIWrapper/>
				</div>

    		</nav>
		);
	}



}