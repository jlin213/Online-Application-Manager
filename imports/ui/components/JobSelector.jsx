import React, {Component} from 'react';
import { withTracker } 							from 'meteor/react-meteor-data';
import { joblistingDB } 						from '../../api/joblistingDB.js';
import AddJobs									from './AddJobs.js';
import SortBar									from './SortBar.jsx';

class JobSelector extends Component {
	constructor(props){
		super(props); 
		this.state= {
			add: false,
			sort: ""
		}	
		this.handleClick = this.handleClick.bind(this);
	}

	// generateJobList(){
	// 	return this.props.joblisting; 
	// 	//database call
	
	// }
	handleClick(event){
		event.preventDefault();
		this.props.selectState(event.currentTarget.id);
	}

	renderJobList(){
		if (this.props.joblisting.length == 0){
			return <div> No applications added.</div>
		}else{
			var listItems;
			if (this.state.sort == "company"){
				listItems = this.props.joblistingTitle.map((listing) => {
				return (
					<div className = "jobListing" id={listing.jobId} onClick={this.handleClick}>
						<div className="listing listing-company">{listing.company}</div>
						<div className="listing listing-position">{listing.position}</div>
						<div className="listing listing-date">{listing.date}</div>
					</div> 
				)
				});
			}else if (this.state.sort == "date"){
				var listItems = this.props.joblistingDate.map((listing) => {
				return (
					<div className = "jobListing" id={listing.jobId} onClick={this.handleClick}>
						<div className="listing listing-company">{listing.company}</div>
						<div className="listing listing-position">{listing.position}</div>
						<div className="listing listing-date">{listing.date}</div>
					</div> 
				)
				});
			}
			else{
				var listItems = this.props.joblisting.map((listing) => {
					return (
						<div className = "jobListing" id={listing.jobId}  onClick={this.handleClick}>
							<div className="listing listing-company">{listing.company}</div>
							<div className="listing listing-position">{listing.position}</div>
							<div className="listing listing-date">{listing.date}</div>
						</div> 
					)
				});

			}
			return listItems;
		}
	}
	addState(state){
		this.setState({
			add: true,
		}, function(){
			this.setState({
				add:false
			})
		})
	}
	sortState(state){
		this.setState({
			sort: state,
		})

	}
	render(){
		return (
			<div className= "h-100">
				<SortBar sortState={this.sortState.bind(this)} sort={this.props.sort}/>
				<div className="d-flex flex-wrap flex-row box">
					{this.renderJobList()}
				</div>
				<div className="card-footer text-muted add-button">
					<AddJobs addState={this.addState.bind(this)} add={this.props.add}/>
				</div> 			
			</div>
		);
	}
}
export default withTracker((props) => {
	Meteor.subscribe('joblisting.all');
	var user = Meteor.user();
  		if (user && user.emails){
  			return {
				joblisting: joblistingDB.find({email: user.emails[0].address
	 			}).fetch(),
	 			joblistingTitle: joblistingDB.find({}, {sort: {company: 1}}).fetch(),
	 			joblistingDate: joblistingDB.find({}, {sort: {date: 1}}).fetch()
			}
		}else{
			return{
				joblisting: joblistingDB.find({}).fetch()
			}
	}
})(JobSelector);