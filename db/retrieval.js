let pool = require("./connect");

async function retrieval() {
  let { rows } = await pool.query(
    `SELECT 
        * 
     FROM 
        messages`
  );
  return rows;
}

module.exports = retrieval;
