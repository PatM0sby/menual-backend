var express = require('express');
var router = express.Router();
var nutritionixapi = require('../public/javascripts/nutritionixapi');




router.get('/', function(req, res, next) {
    res.render('index', { title: 'Menual' });
});
router.post('/', function(req, res, next) {
    var query= req.body.query;
    console.log("Query: "+query);

    //Call all remote API, currently: nutritionaxapi only
    nutritionixapi.callapi(query);

    //extract data, refine, fuse

   res.send(query);


});

module.exports = router;