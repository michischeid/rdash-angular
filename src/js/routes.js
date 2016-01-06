'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/person.html'
            })
            .state('person', {
                url: '/person',
                templateUrl: 'templates/person.html'
            })
            .state('motorcycles', {
                url: '/motorcycles',
                templateUrl: 'templates/motorcycles.html'
            })
            .state('events', {
                url: '/events',
                templateUrl: 'templates/events.html'
            });
    }
]);