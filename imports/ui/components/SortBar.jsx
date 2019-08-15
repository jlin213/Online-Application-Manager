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
			<div class="btn-group bar">
				<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Sort by...</button>
			    <ul class="dropdown-menu">
			        <li> <a href="#" class="dropdown-item" onClick={this.onClickTitle.bind(this)}>Company Title</a> </li>
			        <li> <a href="#" class="dropdown-item" onClick={this.onClickDate.bind(this)}>Applied date</a> </li>
			        <div class="dropdown-divider"></div>
			    </ul>
			 </div>
		)
	}
}	    