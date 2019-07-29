import { check } 								from 'meteor/check';
import { Meteor } 								from 'meteor/meteor';
import { joblistingDB } 						from './joblistingDB.js';

Meteor.methods({
	'joblisting.add'(company, position, date, status, dateContacted, note){
		try{
			joblistingDB.update({
				$setOnInsert: {
					email: Meteor.user().email
					company: company, 
					position: position, 
					date: date, 
					status: status, 
					dateContacted: dateContacted, 
					note: note

				}
			}, {upsert: true}
			)
		}catch(e){
			throw new Meteor.Error("duplicate-error");
		}
	}
})
