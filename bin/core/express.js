/* api.optics
 * bin/core/express.js - express setup
 * started @ 24/10/2015
 */

"use strict";

var express = require( "express" ),
    bodyParser = require( "body-parser" );

var oApp;

oApp = express();

// configure middlewares
    // body-parser
oApp.use( bodyParser.json() );
oApp.use( bodyParser.urlencoded( {
    "extended": true
} ) );

// logs
oApp.use( require( "./express/middlewares" ).log );

// configure routes
require( "../routes/users.js" ).init( oApp );
// require( "../routes/folders.js" ).init( oApp );
// require( "../routes/images.js" ).init( oApp );
// require( "../routes/comments.js" ).init( oApp );

// listen
oApp.listen( 54321 );
