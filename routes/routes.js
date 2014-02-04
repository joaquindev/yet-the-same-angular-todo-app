'use strict';
var Todo = require('./models/todo');

module.exports = function(app){
    //SERVER Routes
    app.get('/api/todos', function(req,res){
        Todo.find(function(err, todos){
            if (err) res.send(err);
            res.json(todos);
        });
    });


    app.post('/api/todos', function(req,res){
        Todo.create({
            text: req.body.text,
            done: false
        }, function(err, todo){
            if (err) res.send(err);
            Todo.find(function(err,todos){
                if (err) res.send(err);
                res.json(todos);
            });
        });
    });

    //FRONTEND Routes
    //TODO
};
