import React, {Component} from 'react';
import { withTracker } 							from 'meteor/react-meteor-data';
import { joblistingDB } 						from '../../api/joblistingDB.js';
export default class SortBar extends Component{
	render(){
		return(
			<div className="bar">
				<div className="dropdown">
					 <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    Dropdown button
					  </button>
					  	<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					    <a className="dropdown-item" href="#">Action</a>
					    <a className="dropdown-item" href="#">Another action</a>
					    <a className="dropdown-item" href="#">Something else here</a>
					  </div> 

				</div>

			</div>

			)
	}

}
