var sequelize = require('sequelize');
var models = require("../models");

exports.save = function (req, res) {
    models.Location.create(req.body).then(function () {

        res.json({
            "status": 200,
            "msg":"Kayıt Başarılı"
        });

    }).catch(function (error) {
        res.json({
            "status": 300,
            "error_data": error,
            "error_msg": error.message
        });
    });
};

exports.list = function (req, res) {

    models.Location.findAll({}).then(function (location) {
        res.json(location);
    });

};

exports.get = function (req, res) {
    User.findOne({ _id: req.params.id }, function (err, user) {
        if (err) {
            console.error('Error occurred while getting user: ', err);
            res.json({
                success: false,
                data: user
            })
        } else {
            if (user) {
                res.json({
                    success: true,
                    data: user
                })
            } else {
                res.status(404).json({
                    success: false,
                    data: "User not found"
                })
            }
        }
    });
};

exports.delete = function (req, res) {
    User.findOneAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error('Error occurred while deleting user: ', err);
            res.json({
                success: false,
                data: 'Error occurred while deleting user'
            });
        } else {
            res.json({
                success: true,
                data: 'User deleted successfully'
            });
        }
    });
};

exports.update = function (req, res) {
    User.findOne({ _id: req.params.id }, function (err, user) {
        if (err) {
            console.error('Error occurred while getting user for update: ', err);
            res.json({
                success: false,
                data: 'Error occurred while getting user for update'
            });
        } else {
            if (!user) {
                res.json({
                    success: false,
                    data: 'User not found'
                });
            } else {
                user.name = req.body.name;
                user.email = req.body.email;
                user.password = req.body.password;

                user.save(function (err, usr) {
                    if (err) {
                        console.error('Error occurred while updating user: ', err);
                        res.json({
                            success: false,
                            data: 'Error occurred while updating user'
                        });
                    } else {
                        res.json({
                            success: true,
                            data: 'User successfully updated',
                        });
                    }
                });
            }
        }
    })
};

