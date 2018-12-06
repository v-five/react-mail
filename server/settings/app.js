
// app config
module.exports = (app, router) => {
	var mongoose     = require('mongoose');
	var bodyParser   = require('body-parser');
	var set          = require('../settings').set;

	//app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	mongoose.connect('mongodb://reactmailuser:reactmailpass1@ds127634.mlab.com:27634/reactmail', { useNewUrlParser: true });
	set.router(app, router);
};
