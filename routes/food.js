var express = require('express');
var request = require('request');
var router = express.Router();
var nutritionixapi = require('../public/javascripts/nutritionixapi');




router.get('/', function(req, res, next) {
    res.render('index', { title: 'Menual' });
});
router.post('/', function(req, res, next) {
    var query= req.body.query;
    console.log("Query: "+query);

    //Call all remote API, currently: nutritionaxapi only
    //var result= nutritionixapi.callapi(query);
    var callapi= function (query) {

        var options = {
            url: "https://trackapi.nutritionix.com/v2/search/instant?query=" + encodeURIComponent(query),
            headers: {
                'User-Agent': 'request',
                "x-app-id": "d869ed82",
                "x-app-key": "a4c707151ae789bf7e68d8b81d5fb697",
                "x-user-jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzUzMTQ3LCJpYXQiOjE1Mjg2NzAwOTMsImV4cCI6MTUzMTM0ODQ5M30.RdHXW5dzxypQ3OUIIlrDIoI81fYViRt8qabAviRq-1c"
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {

                var info = JSON.parse(body);
                console.log(info);
                res.json(info);
                //res.send(query);




            }
        }

        request(options, callback);


    };
    callapi(query);
    //res.json(result);
    //res.send(query);



});

module.exports = router;