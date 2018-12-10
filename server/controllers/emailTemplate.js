
const EmailTemplate = require('../models').EmailTemplate;
const cloudinary = require('cloudinary')

module.exports = {
	addEmailTemplate: (req, res) => {
		let data = req.body;
		if(!data.subject || !data.content) res.status(400).send("The request doesn't contain all required data.");
		else if(req.files && req.files.thumbnail){
				cloudinary.v2.uploader.upload(req.files.thumbnail.path, (err, result) => {
					if(err) res.status(400).send(err.message);
					else{
						data.thumbnail = result.url != null ? result.url : '';
						saveEmailTemplate(data);
					}
				});
		}else{
			saveEmailTemplate(data);
		}

		function saveEmailTemplate(data){
			new EmailTemplate(data).save((err, template) => {
				if (err) res.status(400).send(err.message);
				else if (!template) res.status(400).send();
				else res.json(template);
			});
		}
    },
    getAll: (req, res) => {
        EmailTemplate.find({}, (err, templates) => {
			if (err) res.status(400).send(err.message);
			else if (!templates || !templates.length) res.status(404).send("There are no templates found.");
			else res.json(templates);
		});
    },
    getEmailTemplate: (req, res) => {
		let id = req.params.id;
		if(!id.match(/^[0-9a-fA-F]{24}$/)) res.status(404).send("There are no template found with this id: " + id);
		else {
			EmailTemplate.findById(id, (err, template)=> {
				if (err) res.status(400).send(err.message);
				else if (!template) res.status(404).send("There are no template found with this id: " + id);
				else res.json(template);
			});
		}
	},
	deleteEmailTemplate: (req, res) => {
		let id = req.params.id;
		if(!id.match(/^[0-9a-fA-F]{24}$/)) res.status(404).send("There are no template found with this id: " + id);
		else {
			EmailTemplate.findByIdAndDelete(id, (err, template) => {
					if (err) res.status(400).send(err.message);
					else res.status(200).send();
			});
		}
	}
};
