const db = require('../models');
const Task = db.tasks;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // validate request
    if (!req.body.content) {
        res.status(400).send({
            message: "Content can not be empty."
        })
        return;
    }

    // create a task
    const task = {
        content: req.body.content,
        status: req.body.status,
    };

    // save task in the database
    Task.create(task)
    .then(data=> {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Tutorial."
        })
    })
};

exports.findAll = (req, res) => {
    Task.findAll()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tasks"
        })
    })
};

exports.findOne = (req, res) => {}

exports.update = (req, res) => {}

exports.delete = (req, res) => {}

exports.deleteAll = (req, res) => {}

exports.findAllUndone = (req, res) => {}