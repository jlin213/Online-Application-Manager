import { check } 								from 'meteor/check';
import { Meteor } 								from 'meteor/meteor';
import { joblistingDB } 						from './joblistingDB.js';

Meteor.methods({
	'joblisting.add'(company, position, date, status, note, link){
		var user = Meteor.user();
		var num = joblistingDB.find({}).count();
		try{
			joblistingDB.insert({
					jobId: num,
					email: user.emails[0].address,
					company: company, 
					position: position, 
					date: date, 
					status: status, 
					note: note,
					link: link
				})
		}catch(e){
			console.log(e);
			// throw new Meteor.Error("duplicate-error");
		}
	},
	'joblisting.delete'(deleteId){
		var i = parseInt(deleteId);
		joblistingDB.remove({
			jobId: i
		}, function(err, res){
			if(err){
				console.log(err);
			}else{
				console.log("Remove listing");
				console.log(joblistingDB.find({jobId: i}).count());
			}
		})
		
	}
})
