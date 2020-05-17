module.exports.postCreate = function(req, res, next) {
		let errors = [];
	if(!req.body.name) {
		errors.push('Name is required');
	}

	if(!req.body.phonel) {
		errors.push('Phonel is required');
	}

	if(errors.length) {
		res.render('users/create', {
			errors: errors,
			values: req.body
		});
		return;
	}
	next();
};
