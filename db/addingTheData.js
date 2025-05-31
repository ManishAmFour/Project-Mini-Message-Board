let pool = require("./connect");

async function additionOfData(message, userName, date) {
  let command2 = `
INSERT INTO messages(text,username,added)
VALUES(($1),($2),($3));`;
  await pool.query(command2, [message, userName, date]);
}

module.exports = additionOfData;
