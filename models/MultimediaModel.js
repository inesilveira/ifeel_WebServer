var pool = require("./connection");

module.exports.getMultimediaLatestName = async function(id) {
    try {
        let sql = "select max(file_name) maxname from Multimedia WHERE  Accountid = $1" // $1 GRABS THE FIRST PARAMETER [id] check if id exists
        console.log(sql);
        console.log(id);


        let result = await pool.query(sql, [id]);
        


        if(result.rows.length > 0){
            let maxname = result.rows[0].maxname;
            console.log("[MultimediaModel] maxname = " + JSON.stringify(maxname));
            return { status: 200, data: maxname };
        } else {
            console.log('error')
            return{status:404, data:{msg:"Account not found"}}
        }

    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}
