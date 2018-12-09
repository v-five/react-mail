
const express     = require('express');
const set         = require('./settings').set;
const port        = process.env.PORT || 3030;

// app init
const app = express();
const router = express.Router();

// app config
set.app(app, router);

// app listen
app.listen(port, () => {
	console.log("React Mail API started on port " + port);
});

module.exports = app;
