var express = require('express');
var fs = require('fs');
var router = express.Router();

var controllers = {}
, controllers_path = process.cwd() + '/controller';

console.log(process.cwd());

fs.readdirSync(controllers_path).forEach(function (file) {
	if (file.indexOf('.js') != -1) {
		controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
	}
});

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

// -> /
router.route("/")
.get(function(req,res){
	res.render('pages/index')
});


// -> User
router.route("/users")
.post(controllers.user.save)
.get(controllers.user.list);

router.route('/users/:id')
.get(controllers.user.get)
.put(controllers.user.update)
.delete(controllers.user.delete);

// -> Location
router.route("/location")
.post(controllers.location.save)
.get(controllers.location.list);

router.route('/location/:id')
.get(controllers.location.get)
.put(controllers.location.update)
.delete(controllers.location.delete);

// Auth
router.route('/login')
.post(controllers.auth.login);

router.route('/register')
.post(controllers.auth.register);







module.exports = router;
