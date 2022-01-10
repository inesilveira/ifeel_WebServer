var pool = require("./connection");

module.exports.getPrompts = async function() {
    try {
        let sql = "select * from Prompt"
        let result = await pool.query(sql);
        let prompt = result.rows;
        console.log("[PromptModel] prompts = " + JSON.stringify(prompt));
        return { status: 200, data: prompt };
    } catch (err) {
        console.log(err);
        return { status: 500, data: err };
    }
}