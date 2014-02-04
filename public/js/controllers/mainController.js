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
}]);
