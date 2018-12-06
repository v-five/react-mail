
module.exports = {
	set : {
		app: 	(app, router) => { require('./app')(app, router); },
		router: (app, router) => { require('./router')(app, router); }
	}
};
