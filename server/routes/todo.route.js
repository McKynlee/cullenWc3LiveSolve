const express = require( 'express' );
let router = express.Router();
const pool = require( '../modules/pool' );

router.delete( '/', ( req, res )=>{
    console.log( 'in /task DELETE:' );
    res.send( 'ribbet' );
}) // end DELETE

router.get( '/', ( req, res )=>{
    console.log( 'in /task GET' );
    // query for all tasks
    let queryString = 'SELECT * FROM "task"';
    pool.query( queryString ).then( ( result )=>{
        // if successful send back array of tasks
        res.send( result.rows );
    }).catch( ( err )=>{
        // if error log out and sent error status
        console.log( err );
        res.sendStatus( 400 );
    }) // end query
}) // end GET

router.post( '/', ( req, res )=>{
    console.log( 'in /task POST:', req.body );
    res.send( 'woof' );
}) // end POST

router.put( '/', ( req, res )=>{
    console.log( 'in /task PUT:' );
    res.send( 'chirp' );
}) // end PUT

module.exports = router;