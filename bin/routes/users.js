/* api.optics
 * /bin/routes/users.js - users pages controllers
 * started @ 24/10/2015
 */

"use strict";

var fCheckConnect = require( "../core/express/middlewares.js" ).checkConnect;

exports.init = function( oApp ) {

    // Register new user
    oApp.post( "/user/register", require( "../controllers/users/register.js" ) );

    // Login user
    oApp.post( "/user/check", require( "../controllers/users/check.js" ) );

    // Get settings from user
    oApp.get( "/user/settings/:id", require( "../controllers/users/settings.js" ) );

    // Update settings from user
    oApp.put( "/user/settings/:id", require( "../controllers/users/update-settings.js" ) );

    // Update data from user
    oApp.get( "/user/:id", require( "../controllers/users/details.js" ) );

    // Get user's friends
    oApp.get( "/user/friends", require( "../controllers/users/friends.js" ) );

    // Add friend to user
    oApp.post( "/user/friend", require( "../controllers/users/addFriend.js" ) );

};
