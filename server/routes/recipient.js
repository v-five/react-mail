
const recipientController = require('../controllers').Recipient;

module.exports = (router) => {
    router.route('/recipient')
		.get(recipientController.getAll);
		
    router.route('/recipient')
		.post(recipientController.addRecipient);
		
    router.route('/recipient/:id')
		.get(recipientController.getRecipient);
	
	  router.route('/recipient/:id')
        .delete(recipientController.deleteRecipient);
};
