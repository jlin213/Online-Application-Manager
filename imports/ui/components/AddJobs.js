import React, {Component} 				from 'react'; 
import {withTracker}					from 'meteor/react-meteor-data'; 
import { joblistingDB } 				from '../../api/joblistingDB.js';
import DatePicker 						from "react-datepicker";
import moment 							from 'moment';
import "react-datepicker/dist/react-datepicker.css";

export default class AddJobs extends Component{
	constructor(props){
		super(props); 
		this.state= {
			company: "", 
			position: "", 
			date: new Date(),
			status: "", 
			note: "",
			link: "",
			add: false,
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleChangeDate = this.handleChangeDate.bind(this);
	}

	handleChange(event){
		event.preventDefault(); 
		this.setState({
			[event.target.getAttribute("name")]: event.target.value
		})
	}
	handleChangeDate(date){
		this.setState({
			date: date
		})
	}
	handleSelect(event){
		event.preventDefault();
		console.log(event.target.value);
		this.setState({status: event.target.value});
	}
	handleSubmit(event){
		var formatDate = moment(this.state.date).format("YYYY/MM/DD");
		event.preventDefault();
		var link = "";
		if(this.state.company != "" && this.state.position != "" && formatDate != "" && this.state.status!= ""){
			Meteor.call('joblisting.add', this.state.company, this.state.position, formatDate, this.state.status, this.state.note, this.state.link, function(err, result){
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
			date: new Date(), 
			status: "", 
			note: "",
			link: "",
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
									            placeholder="Enter company..."
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
									            placeholder="Enter position..."
									            value={this.state.position}
									            onChange={this.handleChange}
				      						/>
				      					</div>
				      					<div className = "input-group mb-2"> 
				      						<div className="input-group-prepend">
												<label className="input-group-text">Position:</label>
											</div>
				      						<DatePicker
							              	name="date"
							              	selected={this.state.date}
							              	onChange={this.handleChangeDate}
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
										<div className = "input-group mb-2">
											<div className="input-group-prepend">
												<label className="input-group-text">Provide link to your application site: (Optional)</label>
											</div>
										    <input
									            name="link"
									            type="text"
									            placeholder="Enter link..."
									            value={this.state.link}
									            onChange={this.handleChange}
				      						/>
				      					</div>
									<div className="modal-footer">
										<button className="btn btn-primary" type="submit" value="Submit">Submit</button>
									</div>
								</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}



