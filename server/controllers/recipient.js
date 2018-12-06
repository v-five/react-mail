
const Recipient = require('../models').Recipient;

module.exports = {
	addRecipient: (req, res) => {
		let data = req.body;
		if(!data.firstName || !data.lastName || !data.email) res.status(400).send("The request doesn't contain all required data.");
		else {
			new Recipient(data).save((err, recipient) => {
				if (err) res.status(400).send(err.message);
				else if (!recipient) res.status(400).send();
				else res.json(recipient);
			});
		}
    },
    getAll: (req, res) => {
        Recipient.find({}, (err, recipients) => {
			if (err) res.status(400).send(err.message);
			else if (!recipients || !recipients.length) res.status(404).send("There are no recipients found.");
			else res.json(recipients);
		});
    },
    getRecipient: (req, res) => {
		let id = req.params.id;
		if(!id.match(/^[0-9a-fA-F]{24}$/)) res.status(404).send("There are no recipient found with this id: " + id);
		else {
			Recipient.findById(id, (err, recipient)=> {
				if (err) res.status(400).send(err.message);
				else if (!recipient) res.status(404).send("There are no recipient found with this id: " + id);
				else res.json(recipient);
			});
		}
    }
};
