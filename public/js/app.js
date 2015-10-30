angular
.module('flickrApp', ['ngResource', 'ui.router'])
.config(MainRouter);

MainRouter.$inject = ['$stateProvider', '$urlRouterProvider']; 

function MainRouter($stateProvider, $urlRouterProvider) { 
  $stateProvider
  .state('home',
    { url: "/", 
    templateUrl: "home.html"
  })

  $urlRouterProvider.otherwise('/');
}

