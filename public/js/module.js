'user strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html',
            controllers: 'homeCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: '../views/login.html',
            controllers: 'loginCtrl'
        })
        .state('logout', {
            url: '/logout',
            templateUrl: '../views/logout.html',
            controllers: 'logoutCtrl'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: '../views/signup.html',
            controllers: 'signupCtrl'
        })


    $urlRouterProvider.otherwise('/');
});
