/**
 * Master Controller
 */

angular.module('RDash')
    .controller('EventCtrl', ['$scope', '$cookieStore', 'ngDialog', EventCtrl]);

function EventCtrl($scope, $cookieStore, ngDialog) {
    this.events = [
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
        },
        {
            name: "Motorrad Klassik",
            location: "Walldürn",
            from: new Date("2016-06-03"),
            to: new Date("2016-06-06")
        }];

    this.openParticipationPopup = function (event) {
        this.activeEvent=event;
        ngDialog.open({
            template: 'templates/participationPopup.html',
            scope: $scope
        });
    };
    this.motorcycles = [{
        brand: "Yamaha",
        year: 1997,
        model: "TRX 850",
        cyclinderCnt: 2,
        capacity: 850,
        selected: false
    },
        {
            brand: "Yamaha",
            year: 1997,
            model: "TRX 860",
            cyclinderCnt: 2,
            capacity: 850,
            selected: false
        },
        {
            brand: "Yamaha",
            year: 1997,
            model: "TRX 870",
            cyclinderCnt: 2,
            capacity: 850,
            selected: false
        }];

    this.selectedMotorcycles =[];
    this.germanControls = {
        selectAll       : "Alle auswählen",
        selectNone      : "Keines auswählen",
        reset           : "Alle zurücksetzen",
        search          : "Suchen...",
        nothingSelected : "Keines selektiert"         //default-label is deprecated and replaced with this.
    }



}