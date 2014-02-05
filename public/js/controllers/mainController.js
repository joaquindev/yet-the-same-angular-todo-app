angular.module('angularTodo').
    controller('mainController', ['$scope', 'Todos', function($scope, Todos){
    $scope.formData = {};
   
    $scope.createTodo = function(){
        if(! $.isEmptyObject($scope.formData)){
            Todos.create($scope.formData).
                success(function(data){
                    $scope.formData = {};
                    $scope.todos = data;
                });
        }
    };

    $scope.getServerTime = function(){
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        return h + ":" + m + ":" + s;
    };

    $scope.deleteTodo = function(id){
        Todos.delete(id).
            success(function(data){
                $scope.todos = data;
            });
    };

    $scope.doneTodo = function(id){
       Todos.done(id).
        success(function(data){
            $scope.todos = data;
        }); 
    };

    $scope.undoneTodo = function(id){
      Todos.undone(id).
          success(function(data){
            $scope.todos = data;
          });
    };
}]);
