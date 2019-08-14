import React, {Component} 				from 'react'; 
import {withTracker}					from 'meteor/react-meteor-data'; 
import { joblistingDB } 				from '../../api/joblistingDB.js';

export default class AddJobs extends Component{
constructor(props){
	super(props); 
	this.state= {
		company: "", 
		position: "", 
		date: "", 
		status: "", 
		dateContacted: "", 
		note: "",
		add: false,
	}
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.handleSelect = this.handleSelect.bind(this);
}

handleChange(event){
	event.preventDefault(); 
	console.log(event.target.getAttribute("name")); 

	this.setState({
		[event.target.getAttribute("name")]: event.target.value
	})
}
handleSelect(event){
	event.preventDefault(); 
	this.setState({status: event.target.value});
}
handleSubmit(){
	event.preventDefault();
	if(this.state.company != "" && this.state.position != "" && this.state.date != "" && this.state.status!= ""){
		Meteor.call('joblisting.add', this.state.company, this.state.position, this.state.date, this.status, this.state.dateContacted, this.state.note, function(err, result){
			if(err){
				console.log(err);
			}else{
				$('[id^="addJobs"]').modal('hide');
			}
		})
	}
	this.props.addState(true); 
	this.setState({
		company: "", 
		position: "", 
		date: "", 
		status: "", 
		dateContacted: "", 
		note: "",
		add: false,
	})

}
render(){
	return (
		<div className= "m-2">
			<button type="button" 
				className="btn btn-primary btn-block" 
				data-toggle="modal" 
				data-target="#addJobs">
				Add Job
			</button>
			<div id="addJobs" className="modal fade data-keyboard data-backdrop" role='dialog'>
				<div className="modal-dialog modal-dialog-centered " role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Add your application: 
							</h5>
							<button type="button" 
								className="close" 
								data-dismiss="modal" 
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<form onSubmit={this.handleSubmit}>
							<div className="d-flex flex-row pl-3 pr-3 h-100">
								<div className="modal-body" >
									<div className = "input-group mb-2">
										<div className="input-group-prepend">
												<label className="input-group-text">Company:</label>
										</div>
									    <input
								            name="company"
								            type="text"
								            placeholder="Enter company"
								            value={this.state.company}
								            onChange={this.handleChange}
			      						/>
									</div>
									<div className = "input-group mb-2">
										<div className="input-group-prepend">
												<label className="input-group-text">Position:</label>
										</div>
									    <input
								            name="position"
								            type="text"
								            placeholder="Enter company"
								            value={this.state.position}
								            onChange={this.handleChange}
			      						/>
									</div>
									<div className = "input-group mb-2">
										<div className="input-group-prepend">
												<label className="input-group-text">Date applied:</label>
										</div>
									    <input
								            name="date"
								            type="text"
								            placeholder="Enter company"
								            value={this.state.date}
								            onChange={this.handleChange}
			      						/>
									</div>
									<div className = "input-group mb-2">
										<div className="input-group-prepend">
												<label className="input-group-text">Status:</label>
										</div>
									    <select className="custom-select" 
											id="status-select"
											value = {this.state.status} 
											onChange = {this.handleSelect}
											required>
											<option value= "" disabled>Choose...</option>
											<option value="applied" onChange={this.handleSelect}>Applied</option>
											<option value="contacted" onChange={this.handleSelect}>Contacted</option>
											<option value="interviewing" onChange={this.handleSelect}>Interviewing</option>
											<option value="waiting" onChange={this.handleSelect}>Waiting for results</option>
										</select>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button className="btn btn-primary" type="submit" value="Submit">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

	)
}
}



