// Angular.js
var CardGameTest = angular.module('CardGameTest',['ngRoute']);

CardGameTest.run(['$rootScope', function($rootScope){
  $rootScope.isInt = function(value) {
    return Number.isInteger(value);
  };
}]);


CardGameTest.config(['$locationProvider', '$routeProvider',function($locationProvider,$routeProvider) {

    $locationProvider.html5Mode({
        enabled: false,
        rewriteLinks: false
    }).hashPrefix('!');

    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html'
    })
    .when('/game', {
        templateUrl: 'views/game.html'
    })
    .otherwise({
        templateUrl: '404.html'
    });

}]);

// var Constructable = angular.module('Constructable', ['ngRoute', 'ngSanitize', 'ngAnimate']);

// Constructable.run([function(){

// }]).config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

//     $locationProvider.
//     // html5Mode({ enabled: true, rewriteLinks: false }).
//     hashPrefix('!');

//     $routeProvider
//     .when('/', {
//         templateUrl: 'views/home.html',
//         controller: 'HomeCtrl'
//     })
//     .when('/build', {
//         templateUrl: 'views/build.html',
//         controller: 'BuildCtrl'
//     })
//     .when('/preview/:secret', {
//         templateUrl: 'views/preview.html',
//         controller: 'PreviewCtrl'
//     })
//     .otherwise({
//         templateUrl: 'views/404.html'
//     })
// }])