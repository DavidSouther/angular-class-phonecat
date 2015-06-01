var nodemon = require('nodemon');
var package = require('./package');
var config = require('./server');

nodemon({
  script: package.main,
  ext: config.server.extensions.join(' '),
  watch: config.server.root
});

nodemon.on('start', function () {
  console.log('Rupert has started');
}).on('quit', function () {
  console.log('Rupert has quit');
}).on('restart', function (files) {
  console.log('Rupert restarted due to: ', files);
});
