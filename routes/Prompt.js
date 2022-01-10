var express = require('express');
var router = express.Router();

var PromptModel = require('../models/PromptModel');

/* GET Account model */
router.get('/', async function(req, res, next) {
    let result = await PromptModel.getPrompts();
    res.status(result.status).send(result.data);

});

module.exports = router;