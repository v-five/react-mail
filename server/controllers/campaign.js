
const Campaign = require('../models').Campaign;

module.exports = {
	addCampaign: (req, res) => {
		let data = req.body;
		if(!data.name || !data.recipients.length || !data.emailTemplate || !date) res.status(400).send("The request doesn't contain all required data.");
		else {
			new Campaign(data).save((err, campaign) => {
				if (err) res.status(400).send(err.message);
				else if (!campaign) res.status(400).send();
				else res.json(campaign);
			});
		}
    },
    getAll: (req, res) => {
        Campaign.find().populate('recipients').populate('emailTemplate').exec((err, campaigns) => {
			console.log('----------------------', err, campaigns, '--------------------')
			if (err) res.status(400).send(err.message);
			else if (!campaigns || !campaigns.length) res.status(404).send("There are no campaigns found.");
			else res.json(campaigns);
		});
    },
    deletecampaign: (req, res) => {
		let id = req.params.id;
		if(!id.match(/^[0-9a-fA-F]{24}$/)) res.status(404).send("There are no campaign found with this id: " + id);
		else {
			Campaign.findByIdAndDelete(id, (err, campaign) => {
					if (err) res.status(400).send(err.message);
					else res.status(200).send();
			});
		}
	}
};
