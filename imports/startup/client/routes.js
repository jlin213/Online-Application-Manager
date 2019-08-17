import { FlowRouter } 					from 'meteor/kadira:flow-router';
import { Meteor} 						from 'meteor/meteor'; 
import { mount } 						from 'react-mounter';
import { MainLayout } 					from '../../ui/layouts/mainlayout.jsx';
import React 							from 'react';

import Header 							from '../../ui/components/Header.jsx';
import LandingPage 						from '../../ui/components/LandingPage.jsx';
import JobBoard 						from "../../ui/components/JobBoard.jsx";

FlowRouter.route('/', {
	action: function(params){
		mount(MainLayout, {
			header: <Header/>,
			content: <LandingPage/>,

		});
	}

});


FlowRouter.route('/home', {
	action: function(params){
		if(Meteor.user()){
			mount(MainLayout, {
				header: <Header/>,
				content: <JobBoard/>
			})
		}else{
			mount(MainLayout, {
			header: <Header/>,
			content: <LandingPage/>,

			});
		}

	}

});

import Login 							from '../../ui/components/Login.jsx'
import ValidatedLoginForm 				from '../../ui/components/ValidatedLoginForm.js';


FlowRouter.route('/login', {
	action:function (params){
		if (Meteor.loggingIn()){
			FlowRouter.go('/home');
		}else{
			mount(MainLayout, {
			header: <Header/>,
			content: <Login/>,
		});
		}
		
	}
});

import ValidatedRegisterForm 			from '../../ui/components/ValidatedRegisterForm.js';

FlowRouter.route('/signup', {
	action: function(params) {
		if (Meteor.user()){
			FlowRouter.go('/home');
		}else{
		mount(MainLayout, {
			header: <Header/>, 
			content: <ValidatedRegisterForm/>,
		})
	}
	}
});
import About 							from '../../ui/components/About.jsx';
FlowRouter.route('/about', {
	action: function(params){
		if(Meteor.user()){
			FlowRouter.go('/home');
		}else{
			mount(MainLayout, {
				header: <Header/>, 
				content: <About/>
			})
		}
	}
});

import Dashboard 						from '../../ui/components/Dashboard.jsx';
FlowRouter.route('/dashboard', {
	action: function(params){
		if(!Meteor.user()){
			FlowRouter.go('/home');
		}else{
			mount(MainLayout, {
				header: <Header/>, 
				content: <Dashboard/>
			})
		}
	}
});


FlowRouter.route('/jobboard', {
	action: function(params){
		// if(!Meteor.user()){
		// 	FlowRouter.go('/home')
		// }else{
			mount(MainLayout, {
				header: <Header/>,
				content: <JobBoard/>
			})
		// }

		}
	
});

