var express = require('express');
var router = express.Router();

var AccountModel = require('../models/AccountModel');

/* GET Account model */
router.get('/', async function(req, res, next){
    let result = await AccountModel.getAccounts();
    res.status(result.status).send(result.data);
    
});

module.exports = router;
