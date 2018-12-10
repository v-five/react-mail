
module.exports = (router) => {
	require('./recipient')(router);
	require('./emailTemplate')(router);
	require('./campaign')(router);
};
