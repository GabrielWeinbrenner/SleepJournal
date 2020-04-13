var express = require('express');
var router = express.Router();
// http://127.0.0.1:8080/

// initialize the Fitbit API client
const FitbitApiClient = require("fitbit-node");
const client = new FitbitApiClient({
    clientId: "22BGK4",
    clientSecret: "f05786199d2522c941a4b05ad6e66235",
});

// redirect the user to the Fitbit authorization page
router.get("/auth", (req, res) => {
    // request access to the user's activity, heartrate, location, nutrion, profile, settings, sleep, social, and weight scopes
    res.redirect(client.getAuthorizeUrl('activity heartrate location nutrition profile settings sleep social weight', 'http://localhost:3000/fitbit/callback'));
});

// handle the callback from the Fitbit authorization flow
router.get("/callback", (req, res) => {
    // exchange the authorization code we just received for an access token
    client.getAccessToken(req.query.code, 'http://localhost:3000/fitbit/callback').then(result => {
        // use the access token to fetch the user's profile information
        client.get("/sleep/date/2020-04-02/2020-04-08.json", result.access_token).then(results => {
            res.send(results);
        }).catch(err => {
            res.status(err.status).send(err);
        });
    }).catch(err => {
        res.status(err.status).send(err);
    });
});

module.exports = router;