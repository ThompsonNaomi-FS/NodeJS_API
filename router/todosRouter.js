const { default: axios } = require('axios');
const express = require('express');
const todosRouter = express.Router();
const {todoService, todoServiceByID} = require("../services/todoService");

todosRouter.get('/', (req, res, next) => {
    todoService();
    todoService().then(result => {
        res.status(200).json(result.data);
    }).catch(err => {
        res.status(500).json({
            error:{
                message: error.message,

            },
        });
    });
});

todosRouter.get('/:id', (req, res, next) => {
    todoServiceByID(req.params.id).then(result => {
        res.status(200).json(result.data);
    })
    .catch(err => {
        res.status(500).json({
            error:{
            message: err.message,
            },
        });
    });
});

module.exports = todosRouter;