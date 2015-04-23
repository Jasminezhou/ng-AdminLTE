angular.module('ngAdminLteApp', ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ngAdminLteApp.controllers', 'ngAdminLteApp.directives', 'ngAdminLteApp.filters'])

.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.transitionTo('root.dashboard');
    }
  ]
)

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider
      // Root state to master all
        .state('root', {
            abstract: true,
            controller: 'rootCtrl',
            views: {
                'header': {
                    templateUrl: 'app/partials/header.html',
                    controller: 'RootCtrl'
                },
                'sidebar': {
                    templateUrl: 'app/partials/sidebar.html',
                    controller: 'RootCtrl'
                },
                'main': {
                    template: '<div ui-view="master"></div>',
                    controller: 'RootCtrl'
                },
                'footer': {
                    templateUrl: 'app/partials/footer.html',
                    controller: 'RootCtrl'
                },
            }
        })

        // Dashboard
        .state('root.dashboard', {
            url: '/',
            views: {
                'master@root': {
                    templateUrl: 'app/partials/dashboard.html',
                    controller: 'DashboardCtrl'
                }
            }
        })
    }
  ]
);