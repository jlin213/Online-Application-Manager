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
						<div className = "box bgright">
							<ViewData/>
						</div>  
					</div>

				</div> 
			)
	}




}