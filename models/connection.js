var pg = require('pg');

const connectionString = "postgres://postgres:admin@localhost:5432/ifeel_database"
console.log("connectionString = " + connectionString);

const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 10
})

module.exports = pool;