const commands = require("./commands.js");

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {

  const cmd = data.toString().trim(); // remove the newline
  const argsAry = cmd.split(' ');
  const argument = argsAry[0];
  const output = argsAry.slice(1).join(' ')
 // const cmd = data.split(' ');
  if (argument === 'pwd') commands.pwd(); // process.env.PWD
  if (argument === 'date') commands.date();
  if (argument === 'ls') commands.ls();
  if (argument === 'echo') commands.echo(output);


   //process.stdout.write(cmd);
   process.stdout.write('\nprompt > ');

 });


