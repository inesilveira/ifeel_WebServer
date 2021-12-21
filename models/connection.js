var pg = require('pg');

const connectionString = "postgres://postgres:BeautifulLife24@localhost:5432/ifeel_database"
console.log("connectionsString = " + connectionString);

const Pool = pg.Pool
const pool = new Pool({
        connectionString,
        max: 10
})

module.exports = pool;