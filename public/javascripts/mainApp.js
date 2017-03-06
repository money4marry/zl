angular.module('mainApp', ['ngRoute', 'ngAnimate', 'ngTable'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })
            .when('/signin', {
                templateUrl: 'templates/signin.html',
                controller: 'signinCtrl'
            })
            .otherwise({
                redirectTo: '/signin'
            })
    }])
    .controller('signinCtrl', [function () {
        var self = this;
        self.message = 'test'
    }])
    .controller('homeCtrl',[function () {
        var self = this;
        self.message = 'home'
    }]);