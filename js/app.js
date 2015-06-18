var app = angular.module('EDAssets', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider.state('index', {
        url: '/',
        templateUrl: 'js/directives/mainTypes.html',
        controller:'AssetTypes'
    });

    $stateProvider.state('type', {
        url: '/type?{file}',
        templateUrl: 'js/directives/displayType.html',
        controller: 'AssetType'
    });
});