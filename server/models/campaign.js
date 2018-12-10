
const mongoose    = require('mongoose');
const Schema      = mongoose.Schema;

let CampaignSchema = new Schema({
	name:			String,
	recipients: 	[{type: Schema.Types.ObjectId, ref: 'Recipient'}],
	emailTemplate: 	{type: Schema.Types.ObjectId, ref: 'EmailTemplate'},
	date:			Date
});

module.exports = mongoose.model('Campaign', CampaignSchema);
