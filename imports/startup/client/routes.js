import { FlowRouter } 					from 'meteor/kadira:flow-router';
import { Meteor} 						from 'meteor/meteor'; 
import { mount } 						from 'react-mounter';
import { MainLayout } 					from '../../ui/layouts/mainlayout.jsx';
import React 							from 'react';


import Header 							from '../../ui/components/Header.js';
import JobSelector 						from "../../ui/components/JobSelector.js";

FlowRouter.route('/', {
	action: function(params){
		mount(MainLayout, {
			header: <Header/>,
			jobselector: <JobSelector/>,

		});
	}

});