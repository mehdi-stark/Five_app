﻿var app = angular.module('myMoments', ['ngRoute', 'ngCordova']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'partials/allMoments.html',
            controller: 'allMomentsController'
        })
        .when('/addmoment', {
            templateUrl: 'partials/addMoments.html',
            controller: 'addMomentsController'
        })
        .otherwise({ redirectTo: '/'});
});