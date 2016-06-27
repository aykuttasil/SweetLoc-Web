var debug = require('debug')('sweetloc');
var app = require('./core/express');
var models = require("./models");

app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    console.log('Server listening on Port: ' + server.address().port);
    //debug('Express server listening on port ' + server.address().port);
  });
});
