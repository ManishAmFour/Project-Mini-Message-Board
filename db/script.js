let pool = require("./connect.js");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charls",
    added: new Date(),
  },
];

async function scripting() {
  let command = `CREATE TABLE IF NOT EXISTS messages (
      text VARCHAR( 255 ),
      username VARCHAR( 255 ),
      added VARCHAR( 255 )
);`;

  let command2 = `
INSERT INTO messages(text,username,added)
VALUES(($1),($2),($3));`;

  let command3 = `
INSERT INTO messages(text,username,added)
VALUES(($1),($2),($3));`;

  await pool.query(command);

  await pool.query(command2, [
    messages[0].text,
    messages[0].user,
    messages[0].added,
  ]);

  await pool.query(command3, [
    messages[1].text,
    messages[1].user,
    messages[1].added,
  ]);
}

scripting();
