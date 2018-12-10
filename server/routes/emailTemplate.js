
const emailTemplateController = require('../controllers').EmailTemplate;

module.exports = (router) => {
    router.route('/email-template')
		.get(emailTemplateController.getAll);
		
    router.route('/email-template')
		.post(emailTemplateController.addEmailTemplate);
		
    router.route('/email-template/:id')
		.get(emailTemplateController.getEmailTemplate);
	
	  router.route('/email-template/:id')
        .delete(emailTemplateController.deleteEmailTemplate);
};
