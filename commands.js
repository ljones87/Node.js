

module.exports = {
  pwd:  function() {
          var cmdpwd = process.env.PWD
          console.log(cmdpwd);
        },
  date:  function() {
           return Date();
        },

  ls: function() {
        var fs = require('fs');
        return fs.readdir('.', function(err, lstat) {
          if (err) throw err;
        lstat.forEach(function(file) {
          process.stdout.write(file.toString() + "\n");
        });
          process.stdout.write("prompt > ");
        });
  },
  echo:  function(text) {
          console.log(text);
   }

}
