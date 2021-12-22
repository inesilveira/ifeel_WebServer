var express = require('express');
var router = express.Router();

var MultimediaModel = require('../models/MultimediaModel');

/* GET Account model */
router.get('/image_latest_name/:id', async function(req, res, next) {
    
    let id = req.params.id;

    let result = await MultimediaModel.getMultimediaLatestName(id);
    res.status(result.status).send(result.data);

});

module.exports = router;