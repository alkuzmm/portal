var express = require('express');
var router = express.Router();

/* GET /auth */
router.get("/", function(req, res, next) {
	res.render("auth");
});

/* GET /auth */
router.post("/", function(req, res, next) {
	console.log(req.body);
	res.json(req.body);
});

module.exports = router;
