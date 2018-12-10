
const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

let EmailTemplateSchema = new Schema({
	subject: 	String,
	content: 	String,
	thumbnail:	String
});

module.exports = mongoose.model('EmailTemplate', EmailTemplateSchema);
