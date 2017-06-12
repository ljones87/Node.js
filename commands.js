
var fs = require('fs');
module.exports = {
  pwd:  function() {
          var cmdpwd = process.env.PWD
          process.stdout.write(cmdpwd);
        },
  date:  function() {
           process.stdout.write(Date());
        },

  ls: function() {
        fs.readdir('.', function(err, files) {
          if (err) throw err;
          process.stdout.write(files.join('\n'));
          process.stdout.write("\nprompt > ");
        });
  },
  echo: function(text) {
          process.stdout.write(text);
   }

}
