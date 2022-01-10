var pg = require('pg');

<<<<<<< HEAD
const connectionString = "postgres://postgres:admin@localhost:5432/ifeel_database"
console.log("connectionString = " + connectionString);
=======
const connectionString = "postgres://postgres:BeautifulLife24@localhost:5432/ifeel_database"
console.log("connectionsString = " + connectionString);
>>>>>>> parent of ec83d76 (Merge branch 'main' into Mariya)

const Pool = pg.Pool
const pool = new Pool({
        connectionString,
        max: 10
})

module.exports = pool;