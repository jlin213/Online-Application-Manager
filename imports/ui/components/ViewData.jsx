import React, {Component} 							from 'react';
import ReactDOM 									from 'react-dom';
import { VictoryChart , VictoryLine, VictoryAxis, VictoryScatter} 	from 'victory';
import { withTracker } 								from 'meteor/react-meteor-data';
import { joblistingDB } 							from '../../api/joblistingDB.js';


class ViewData extends Component{

	constructor(props){
		super(props); 
		this.state ={
			data: [],
			show: false
		}
		this.renderListing = this.renderListing.bind(this);
	}

	renderListing(){
		var numDates = Array.from(
			new Set(this.props.joblistingDate.map((item) => {
			return (item.date);
		}))
		); 
		var result = {}; 
		this.props.joblistingDate.forEach(function(i){
			if(result[i.date]){
				result[i.date].numApp += 1
			}else{
				result[i.date] = {numApp: 1}
			}
			}
		)
		const mapListing = Object.entries(result).map(([key, value]) =>{
			return(
				{date: key, numApp: value.numApp}
			)
		})

		if (this.state.data.length <mapListing.length)	{
			this.setState({
			data: mapListing,
			show: true
			})
		}
	
	  	
	}
	renderGraph(){

		return(
			<VictoryChart polar={false} height={390}>
	          		<VictoryLine
		            interpolation={"linear"} data={this.state.data}
		            x= "date"
		            y= "numApp"
		            style={{ data: { stroke: "#c43a31" } }}
	          	/>
		          <VictoryScatter data={this.state.data}
		          	x= "date"
		            y= "numApp"
		            size={5}
		            style={{ data: { fill: "#c43a31" } }}
		          />
		          <VictoryAxis/>
		          <VictoryAxis	dependentAxis
		          	tickValues ={[0, 1, 2, 3, 4, 5]}
    				tickFormat={(x) => `${Math.round(x)}`}
		          />
	        </VictoryChart>
		)
	}

render(){
	this.renderListing();
	var graph = this.renderGraph();
	return(
		<div className="view-data">
			{ this.state.show ? graph : null}
		</div>
	)

	}
}
export default withTracker((props) => {
	Meteor.subscribe('joblisting.all');
	var user = Meteor.user();
  		if (user && user.emails){
  			return {
  				joblistingDate: joblistingDB.find({email: user.emails[0].address
	 			}, {sort: {date: 1}}).fetch()
			}
		}else{
			return{
				joblistingDate: joblistingDB.find({}).fetch()
			}
		}
})(ViewData);