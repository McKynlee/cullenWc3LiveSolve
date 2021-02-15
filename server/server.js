// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' ); 
const task = require( './routes/todo.route' );
// globals
const port = 5000;
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/task', task );
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up