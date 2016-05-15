'user strict';

var app = angular.module('myApp', ['ui.router']);

app.controller('mainCtrl', function($scope){
console.log('mainCtrl loaded');
});
app.controller('homeCtrl', function($scope){
    console.log('homeCtrl loaded');

});
app.controller('loginCtrl', function($scope){
    console.log('loginCtrl loaded');

});
