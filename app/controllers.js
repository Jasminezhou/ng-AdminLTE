angular.module('ngAdminLteApp.controllers', [])

.controller('RootCtrl', function($scope, $rootScope){
  // controls sidebar expand/close
  $rootScope.sidebarCollapse = false;
  $scope.toggleSidebar = function(){
    $rootScope.sidebarCollapse = !$rootScope.sidebarCollapse;
  };
})
.controller('LoginCtrl', function($scope){ })
.controller('LockCtrl', function($scope){ })
.controller('RegisterCtrl', function($scope){ })
.controller('DashboardCtrl', function($scope){ })
.controller('TableListCtrl', function($scope, $state){
  $scope.tableName = $state.params.tableName;
  $scope.rowCollection = [
      {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
      {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
      {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
  ];

  $scope.removeRow = function removeRow(row) {
      var index = $scope.rowCollection.indexOf(row);
      if (index !== -1) {
          $scope.rowCollection.splice(index, 1);
      }
  }
})
.controller('TableEditCtrl', function($scope, $state){
  $scope.tableName = $state.params.tableName;
  $scope.recordId = $state.params.recordId;
  // Datepicker
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

})