import React, { Component } 			from 'react';
export default class About extends Component {


	render(){
		return(
			<div className="about-bg"> 
				<div className="about-title"> 
					Arc: Organize Your Job Search
				</div> 
				<div> 
					Arc is created to help people who struggle to find a job to keep track of their applications. 
					It is a web application based on React.js and Meteor.js. <a href=""> View the source code </a> 
				</div>
				<div> 
					This is a side project done by <a href="https://jlin213.github.io"> Julianne Lin </a>. 
					Any feedback or chat about this project, please contact julianne.lin@mail.utoronto.ca, or visit 
					<a href="https://www.linkedin.com/in/julianne-lin/">LinkedIn</a>
				</div> 
			</div> 
		)
	}


}