var express = require('express');
var router = express.Router();
// http://127.0.0.1:8080/

// initialize the Fitbit API client
const FitbitApiClient = require("fitbit-node");
const client = new FitbitApiClient({
    clientId: "22BGK4",
    clientSecret: "d36ea1aa94b45cf71782776f05c08e91",
});

// redirect the user to the Fitbit authorization page
router.get("/", (req, res) => {
    // request access to the user's activity, heartrate, location, nutrion, profile, settings, sleep, social, and weight scopes
    res.redirect(client.getAuthorizeUrl('activity heartrate location nutrition profile settings sleep social weight', 'http://127.0.0.1:8080/'));
});

// handle the callback from the Fitbit authorization flow
router.get("/callback", (req, res) => {
    // exchange the authorization code we just received for an access token
    client.getAccessToken(req.query.code, 'http://127.0.0.1:8080/').then(result => {
        // use the access token to fetch the user's profile information
        client.get("/profile.json", result.access_token).then(results => {
            res.send(results[0]);
        }).catch(err => {
            res.status(err.status).send(err);
        });
    }).catch(err => {
        res.status(err.status).send(err);
    });
});

module.exports = router;