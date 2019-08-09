import { Meteor } from 'meteor/meteor';
import {joblistingDB} from './joblistingDB.js' ;

if (Meteor.isServer) {
	// This code only runs on the server 
	Meteor.publish('joblisting.all', function() {
		return joblistingDB.find();
	});

	Meteor.publish('userCount', function() {
		return Meteor.users.find({});
	});

}