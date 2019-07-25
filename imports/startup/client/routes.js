import { FlowRouter } 					from 'meteor/kadira:flow-router';
import { Meteor} 						from 'meteor/meteor'; 
import { mount } 						from 'react-mounter';
import { MainLayout } 					from '../../ui/layouts/mainlayout.jsx';
import React 							from 'react';


import Header 							from '../../ui/components/Header.js';
import JobSelector 						from "../../ui/components/JobSelector.js";
import LandingPage 						from '../../ui/components/LandingPage.jsx';

FlowRouter.route('/', {
	action: function(params){
		mount(MainLayout, {
			header: <Header/>,
			content: <LandingPage/>,

		});
	}

});