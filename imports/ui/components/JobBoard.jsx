import React, {Component} 					from 'react'; 
import JobSelector							from './JobSelector.jsx'; 
import DisplayJob							from './DisplayJobs.jsx';
import CalendarView							from './CalendarView.jsx';
import ViewData								from './ViewData.jsx';

export default class JobBoard extends Component{
	constructor(props){
		super(props); 
		this.state = {
			selected: -1, 
		}
	this.selectState = this.selectState.bind(this); 
	}

	selectState(id){
		this.setState({
			selected: id
		})
	}

	
	render(){
		return (
			<div className = "w-100 h-100 bgbox">
				<div className = "w-50 h-100 ">
					<div className = "box bgleft">
						<JobSelector selectState={this.selectState.bind(this)}/>					
					</div> 
				</div> 
				<div className ="w-50 h-100">
					<div className = "box bgright">
						<DisplayJob selected={this.state.selected}/>
						<ViewData/>
					</div>  
				</div>

			</div> 
		)
	}

}
