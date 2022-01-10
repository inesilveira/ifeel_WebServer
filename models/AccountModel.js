
//Account Model gets the Query
var pool = require("./connection");
module.exports.getAccounts = async function() {
    try {
        let sql = "select * from Account"
        let result = await pool.query(sql);
        let account = result.rows;
        console.log("[AccountModel] products = " + JSON.stringify(account));
        return { status: 200, data: account};
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}