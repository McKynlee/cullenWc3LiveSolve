let pg = require( 'pg' );

let pool = new pg.Pool({
    host: 'localhost',
    database: 'weekend-to-do-app',
    port: 5432,
    max: 12,
    idleTimeOutMillis: 30000
})

module.exports = pool;