/**
 * Master Controller
 */

angular.module('Portal')
    .controller('EventCtrl', ['$scope', '$cookieStore', 'ngDialog','Event','Motorcycle','Person','Participation', EventCtrl]);

function EventCtrl($scope, $cookieStore, ngDialog, Event, Motorcycle, Person, Participation) {

    this.events = Event.query();
    this.motorcycles = Motorcycle.query();
    this.person=Person.get();
    this.participations = Participation.query();

    this.participate = function (eventId, motorcycles) {
        angular.forEach(motorcycles, function(motorcycle){
            var participationObject={};
            participationObject.eventId=eventId;
            participationObject.motorcycleId = motorcycle.id;
            Participation.add(participationObject);
        });
    };


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