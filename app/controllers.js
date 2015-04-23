angular.module('ngAdminLteApp.controllers', [])

.controller('RootCtrl', function($scope, $rootScope){
  // controls sidebar expand/close
  $rootScope.sidebarCollapse = false;
  $scope.toggleSidebar = function(){
    $rootScope.sidebarCollapse = !$rootScope.sidebarCollapse;
  };
})
.controller('DashboardCtrl', function($scope){ })
