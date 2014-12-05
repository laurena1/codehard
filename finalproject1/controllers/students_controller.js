var mongoose = require('mongoose');
var Student = mongoose.model('Student');

exports.getStudent = function(req, res) {
	Student.findOne({
	_id: req.query.firstname
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