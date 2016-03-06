/**
 * Master Controller
 */

angular.module('Portal')
    .controller('EventCtrl', ['$scope', '$cookieStore', 'ngDialog','Event','Motorcycle', EventCtrl]);

function EventCtrl($scope, $cookieStore, ngDialog, Event, Motorcycle) {

    this.events = Event.query();
    this.motorcycles = Motorcycle.query();

    this.openParticipationPopup = function (event) {
        this.activeEvent=event;
        ngDialog.open({
            template: 'templates/participationPopup.html',
            scope: $scope
        });
    };
     this.germanControls = {
        selectAll       : "Alle auswählen",
        selectNone      : "Keines auswählen",
        reset           : "Alle zurücksetzen",
        search          : "Suchen...",
        nothingSelected : "Keines selektiert"         //default-label is deprecated and replaced with this.
    }



}