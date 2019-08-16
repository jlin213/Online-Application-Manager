import React, {Component} 				from 'react'; 
import { withTracker } 							from 'meteor/react-meteor-data';
import { joblistingDB } 						from '../../api/joblistingDB.js';
export default class SortBar extends Component{
	constructor(props){
		super(props); 
		this.state ={
			sort: ""
		}
	}

	onClickTitle(){
		this.setState({
			sort: "title"
		})
		this.props.sortState("company");
	}

	onClickDate(){
		this.setState({
			sort: "date"
		})
		this.props.sortState("date");
	}
	render(){
		return(
			<div className="btn-group bar">
				<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">Sort by...</button>
			    <ul className="dropdown-menu">
			        <li> <a href="#" className="dropdown-item" onClick={this.onClickTitle.bind(this)}>Company Title</a> </li>
			        <li> <a href="#" className="dropdown-item" onClick={this.onClickDate.bind(this)}>Applied date</a> </li>
			        <div className="dropdown-divider"></div>
			    </ul>
			 </div>
		)
	}
}	    