import React, {Component} from 'react';
import { withTracker } 							from 'meteor/react-meteor-data';
import { joblistingDB } 						from '../../api/joblistingDB.js';

class DisplayJob extends Component {
	constructor(props){
		super(props);
	}

	getListing(){
		var arr = []; 
		for (var i = 0; i < this.props.joblisting.length; i++){
			console.log(this.props.selected);
			console.log(this.props.joblisting[i].jobId);
			if(this.props.joblisting[i].jobId == this.props.selected){
				arr.push(this.props.joblisting[i]);
			}
		}
		return arr;
	}
	renderListing(){
		var listing = this.getListing(); 
		if(listing.length == 0){
			return <div>Please Select From the Left</div>
		}else {
			var listItems = listing.map((item) => {
				return (
					<div className = "detailsBox" key={item.jobId}>
						<div className="listing listing-company">{item.company}</div>
						<div className="listing listing-position">{item.position}</div>
						<div className="listing listing-date">{item.date}</div>
					</div> 
				)
			});
			return listItems; 
		}
	}

	render(){
		return(
			<div className="h-100" style={{overflow:'hidden'}}> 
				{this.renderListing()}
			</div>

		)
	}

}
export default withTracker((props) => {
	Meteor.subscribe('joblisting.all');
	var user = Meteor.user();
  		if (user && user.emails){
  			return {
				joblisting: joblistingDB.find({email: user.emails[0].address
	 			}).fetch(),
			}
		}else{
			return{
				joblisting: joblistingDB.find({}).fetch()
			}
		}
})(DisplayJob);