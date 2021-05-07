import React, {Component}								from 'react';
import CalendarView							from './CalendarView.jsx';
import ViewData								from './ViewData.jsx';


export default class DashBoard extends Component{

	render(){
			return (
				<div className = "w-100 h-100 bgbox">
					<div className = "w-50 h-100 ">
						<div className = "box bgleft">
							<CalendarView/>					
						</div> 
					</div> 
					<div className ="w-40 h-100">
						<div className = "dashboard-right-1">
							<ViewData/>
						</div>  
						<div className="dashboard-right-2">
							<div className="link-box">
								Don't know where to apply? Check out these places:
								<br></br> 
								<a href="https://www.linkedin.com/uas/login" className="btn btn-primary link-margin"> LinkedIn
								</a> 
								<br></br> 
								<a href="https://www.indeed.com" className="btn btn-primary link-margin"> Indeed
								</a> 
								<br></br> 
								<a href="https://www.glassdoor.ca/index.htm" className="btn btn-primary link-margin"> Glassdoor
								</a> 
								<br></br> 
								If you are looking for internships: 
								<br></br> 
								<a href="https://intern.supply" className="btn btn-primary link-margin"> Intern.supply
								</a> 
								<br></br> 
								If you are looking for startups: 
								<br></br> 
								<a href="https://angel.co" className="btn btn-primary link-margin"> Angel.co
								</a> 
								<br></br> 
							</div>
						</div> 
					</div>


				</div> 
			)
	}




}