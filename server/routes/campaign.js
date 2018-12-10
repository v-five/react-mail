
const campaignController = require('../controllers').Campaign;

module.exports = (router) => {
    router.route('/campaign')
		.get(campaignController.getAll);
		
    router.route('/campaign')
		.post(campaignController.addCampaign);
		
    router.route('/campaign/:id')
        .delete(campaignController.deletecampaign);
};
