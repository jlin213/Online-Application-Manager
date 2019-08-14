import { check } 								from 'meteor/check';
import { Meteor } 								from 'meteor/meteor';
import { joblistingDB } 						from './joblistingDB.js';

Meteor.methods({
	'joblisting.add'(company, position, date, status, dateContacted, note){
		var user = Meteor.user();

		try{
			joblistingDB.insert({
					email: user.emails[0].address,
					company: company, 
					position: position, 
					date: date, 
					status: status, 
					dateContacted: dateContacted, 
					note: note
					
				})
		}catch(e){
			console.log(e);
			// throw new Meteor.Error("duplicate-error");
		}
	}
})
