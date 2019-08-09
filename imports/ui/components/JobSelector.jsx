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
		}	
	}

	// generateJobList(){
	// 	return this.props.joblisting; 
	// 	//database call
	
	// }

	renderJobList(){
		console.log(this.props.joblisting.company);
		if (this.props.joblisting.length == 0){
			return <div> No applications added.</div>
		}else{
			const listItems = this.props.joblisting.map((listing) => {
			return (
				<div className = "jobListing">
					<div className="listing listing-company">{listing.company}</div>
					<div className="listing listing-position">{listing.position}</div>
					<div className="listing listing-date">{listing.date}</div>
				</div> 
			)
			});
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

	render(){
		return (
			<div className= "h-100">
				<div>
					<SortBar/>
				</div>
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
	 			}).fetch()}
			}else{
			return{
				joblisting: joblistingDB.find({}).fetch()
			}
		}
  	

})(JobSelector);