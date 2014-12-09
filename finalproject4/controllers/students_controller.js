//We all collectively worked on this page which retrieves the database information.>
var mongoose = require('mongoose');
var Student = mongoose.model('Student');

exports.getStudent = function(req, res) {
	var studentemail = req.param('email');
	Student.findOne({
		email: studentemail
	})
	.exec(function(err, student) {
		if(!student) {
			res.json(404, {
				msg: 'Student Not Found'
			});
		}
		else {
			res.json(student)
		}
		});
	};
	
	
	exports.getStudents = function(req, res) {
	
	Student.find()
		.exec(function(err, students) { 
			if(err)
			{
				alert(err);
			}
			if(!students) {
				res.json(404, {
					msg:'Students Not Found'
				});
			}
			else {
				res.json(students);
			}
	});
};