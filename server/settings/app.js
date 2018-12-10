
// app config
module.exports = (app, router) => {
	var mongoose     = require('mongoose');
	var bodyParser   = require('body-parser');
	const formData 	 = require('express-form-data');
	var set          = require('../settings').set;
	var cloudinary 	 = require('cloudinary');
	
	app.use(bodyParser.json());
	app.use(formData.parse());

	mongoose.connect('mongodb://reactmailuser:reactmailpass1@ds127634.mlab.com:27634/reactmail', { useNewUrlParser: true });
	set.router(app, router);

	cloudinary.config({
		cloud_name: 'vfive',
		api_key: '591378392665987',
		api_secret: 'kWbutK_rzl1KT8b6znfVISYYlhQ'
	});
};
