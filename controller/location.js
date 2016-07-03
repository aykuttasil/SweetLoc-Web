var sequelize = require('sequelize');
var models = require("../models");

exports.save = function (req, res) {
    models.Location.create(req.body).then(function () {

        res.json({
            success: true,
            status: 200,
            data: null,
            msg: "Kayıt Başarılı"
        });

    }).catch(function (error) {

        res.json({
            success: false,
            status: 300,
            data: error,
            msg: error.message
        });
    });
};

exports.list = function (req, res) {

    models.Location.findAll({}).then(function (loc) {
        res.json({
            success: true,
            status: 200,
            data: loc,
            msg: null
        });
    });

};

exports.get = function (req, res) {
    //console.log(req);
    models.Location.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (loc) {
        console.log(loc);
        res.json({
            success: true,
            status: 200,
            data: loc,
            msg: null
        });
    }).catch(function (error) {
        res.json({
            success: false,
            status: 300,
            data: error,
            msg: error.message
        });
    });
};

exports.delete = function (req, res) {

};

exports.update = function (req, res) {

};
