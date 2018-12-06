
const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

let validateEmail = function(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
};

let RecipientSchema = new Schema({
	firstName: 	String,
	lastName: 	String,
	email:		{
				type: 		String,
				trim: 		true,
				lowercase: 	true,
				required:	'Email is required.',
				validate:	[validateEmail, 'Please fill a valid email address.']
	}
});

RecipientSchema.pre('save', function(next) {
	let self = this;
	mongoose.models.Recipient.findOne({email: self.email}, (err, recipient) => {
		if(err) next(err);
		else if(recipient){
			const err = new Error('Email address must be unique.');
			next(err);
		} else {
			next();
		}
	});
});

module.exports = mongoose.model('Recipient', RecipientSchema);
