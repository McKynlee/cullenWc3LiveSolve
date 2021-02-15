const express = require( 'express' );
let router = express.Router();
const pool = require( '../modules/pool' );

router.delete( '/:id', ( req, res )=>{
    console.log( 'in /task DELETE:', req.params );
    let queryString = 'DELETE FROM task WHERE id=$1';
    pool.query( queryString, [ req.params.id ] ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 400 )
    }) //end query
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
    let queryString = 'INSERT INTO "task" (name) values ($1)';
    pool.query( queryString, [ req.body.name ] ).then( ( result )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 400 );
    }) // end query
}) // end POST

router.put( '/:id', ( req, res )=>{
    console.log( 'in /task PUT:', req.params.id );
    let queryString = 'UPDATE "task" SET "complete"=true WHERE id=$1';
    pool.query( queryString, [ req.params.id ] ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 400 )
    } ) // end query;
}) // end PUT

module.exports = router;