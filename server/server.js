// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' ); 
// globals
const port = 5000;
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up