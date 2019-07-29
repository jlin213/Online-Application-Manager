import { Meteor } from 'meteor/meteor';
import { abyssDB } from '../abyssDB.jsx';
import { abyssCommentsDB } from '../abyssDB.jsx';

if (Meteor.isServer) {
	// This code only runs on the server 
	Meteor.publish('joblisting.all', function() {
		return joblisting.find();
	});

	Meteor.publish('userCount', function() {
		return Meteor.users.find({});
	});

}