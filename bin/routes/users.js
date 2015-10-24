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

};
