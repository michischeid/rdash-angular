/**
 * Master Controller
 */

angular.module('RDash')
    .controller('EventCtrl', ['$scope', '$cookieStore', EventCtrl]);

function EventCtrl($scope, $cookieStore) {
    this.events = [{
        name: "Motorrad Klassik",
        location: "Walldürn",
        from: new Date("2016-06-03"),
        to: new Date("2016-06-06")
    },
        {
            name: "Motorrad Klassik",
            location: "Walldürn",
            from: new Date("2016-06-03"),
            to: new Date("2016-06-06")
        },
        {
            name: "Motorrad Klassik",
            location: "Walldürn",
            from: new Date("2016-06-03"),
            to: new Date("2016-06-06")
        }];

}