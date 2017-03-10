var app = angular.module('toDoApp', []);
app
  .controller('ToDoController', ['$scope', function ($scope) {
      
    $scope.syncLocalStorage = function () {
        localStorage.setItem("toDoList", JSON.stringify($scope.tasks))
        
    }  
    
    var toDos = JSON.parse(localStorage.getItem("toDoList"));
    $scope.tasks = Array.isArray(toDos)? toDos: [] ;  
    $scope.task = '';
    $scope.date = '';
    $scope.desc = '';
  
   
    $scope.editIndex = false;
    $scope.addTask = function () {
        if( $scope.editIndex === false){
            $scope.tasks.push({task: $scope.task, date: $scope.date, desc: $scope.desc, done: false})
            
           
        } else {
            $scope.tasks[$scope.editIndex].task = $scope.task;
            $scope.tasks[$scope.editIndex].date = $scope.date;
            $scope.tasks[$scope.editIndex].desc = $scope.desc;
           
       
        }
        $scope.editIndex = false;
        $scope.task = '';
        $scope.date = '';
        $scope.desc = '';
    
        $scope.syncLocalStorage();
    }
    

    
 
        
    $scope.editTask = function (index) {
        $scope.task = $scope.tasks[index].task;
     
      $scope.editIndex = index;
      $scope.syncLocalStorage();
    }
    $scope.doneTask = function (index) {
      $scope.tasks[index].done = true;
      $scope.syncLocalStorage();
      
    }
    $scope.unDoneTask = function (index) {
      $scope.tasks[index].done = false;
      $scope.syncLocalStorage();
        
    }
    $scope.deleteTask = function (index) {
        
        
      $scope.tasks.splice(index, 1);
      $scope.syncLocalStorage();
    }
  }])

