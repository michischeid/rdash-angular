'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/Person');

        // Application routes
        $stateProvider
            .state('Person', {
                url: '/Person',
                templateUrl: 'templates/person.html'
            })
            .state('Motorräder', {
                url: '/Motorräder',
                templateUrl: 'templates/motorcycles.html'
            })
            .state('Veranstaltungen', {
                url: '/Veranstaltungen',
                templateUrl: 'templates/events.html'
            });
    }
]);