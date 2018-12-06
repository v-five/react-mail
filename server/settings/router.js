/**
 * Created by Vityka on Jan, 23.
 */

module.exports = (app, router) => {
	var routes = require('../routes');

	app.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	routes(router);
	app.use('/api', router);

	app.get('/', (req, res) => {
		res.send('Welcome to React Mail API!');
	});
};
