import React, {Component} 					from 'react'; 
import JobSelector							from './JobSelector.jsx'; 

export default class Dashboard extends Component{
	constructor(props){
		super(props); 
		this.state = {
			selected: "", 
		}

	}

	render(){
		return (
			<div className = "w-100 h-100 bgbox">
				<div className = "w-50 h-100 ">
					<div className = "box bgleft">
						<JobSelector/>
					</div> 
				</div> 

			</div> 
		)
	}

}
