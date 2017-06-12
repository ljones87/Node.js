const commands = require("./commands.js");

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {

  const cmdInputs = data.toString().trim().split(' '); // remove the newline
  const cmd = cmdInputs[0];
  const args = cmdInputs.slice(1).join(' ');

  if (commands[cmd]) commands[cmd](args);

 });


