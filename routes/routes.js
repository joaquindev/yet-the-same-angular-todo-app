'use strict';
var Todo = require('../public/js/models/todo');

module.exports = function(app){
    //SERVER Routes
    app.get('/api/todos', function(req,res){
        Todo.find(function(err, todos){
            if (err) res.send(err);
            res.json(todos);
        });
    });

    app.post('/api/todos', function(req,res){
        Todo.create({text: req.body.text, done: false }, function(err, todo){
            if (err) res.send(err);
            Todo.find(function(err,todos){
                if (err) res.send(err);
                res.json(todos);
            });
        });
    });

    app.delete('/api/todos/:todo_id', function(req, res){
        Todo.remove({_id: req.params.todo_id}, function(err, todo){
           if (err) res.send(err);
           Todo.find(function(err, todos){
              if (err) res.send(err);
              res.json(todos);  
           }); 
        });
    });

    app.post('/api/todos/done/:todo_id', function(req, res){
        Todo.update({ _id : req.params.todo_id }, { done : true }, function(err, todo){
            if (err) res.send(err);
            Todo.find(function(err, todos){
                if (err) res.send(err);
                res.json(todos);
            }); 
        });
    });
  
    app.post('/api/todos/undone/:todo_id', function(req, res){
        Todo.update({ _id : req.params.todo_id }, { done : false }, function(err, todo){
            if (err) res.send(err);
            Todo.find(function(err, todos){
                if (err) res.send(err);
                res.json(todos);
            }); 
        });
    });

    app.post('/api/todos/alldone', function(req, res){
      Todo.update({ done : false }, { $set: { done: true }}, { multi: true }, function(err, todo){
        if (err) res.send(err);
        Todo.find(function(err, todos){
          if (err) res.send(err);
          res.json(todos);
        });
      });
    });

    app.post('/api/todos/allundone', function(req, res){
      Todo.update({ done: true },{ $set: { done: false }},{ multi: true}, function(err, todo){
        if (err) res.send(err);
        Todo.find(function(err, todos){
          if (err) res.send(err);
          res.json(todos);
        });
      }); 
    });
    
    //FRONTEND Routes
    //TODO
};
