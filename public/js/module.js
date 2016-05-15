'user strict'

var app = angular.module('myApp', [ui.router]);

app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../views/home.html'
        })

});
