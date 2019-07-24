import React, {Component} from 'react';
export default class JobSelector extends Component {

	constructor(props){
		super(props); 
		this.handleClick = this.handleClick.bind(this);
	}

	generateJobList(){
		//database call
	
	}

	handleClick(){
		// import right side menu 
	}
	renderJobList(){
		var num = [0,0];
		const listItems = num.map((num) => {
			return <div className = "jobListing" onClick = {this.handleClick.bind(this)}>
				This is a listing.
			</div> 
		});
		return listItems;
	}

	render(){
		return (
			<div>
				<div className="d-flex flex-wrap flex-row box">
					{this.renderJobList()}
				</div>
			</div>
		);
	}
}