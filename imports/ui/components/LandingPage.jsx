import React, { Component } 			from 'react';
export default class LandingPage extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="landing-page">
				<div className = "resume">
					<img src ="/img/resume.png"/>
				</div>
				<div className="landing-header"> 
					Manage Your Job Applications Online and Free
				</div>
				<div className="landing-header1">
					We help you keep track your applications and set reminders to follow up!
				</div>
			</div>
		);
	}



}