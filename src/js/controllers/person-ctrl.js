/**
 * Master Controller
 */

angular.module('Portal')
    .controller('PersonCtrl', ['$scope', '$cookieStore','Person', PersonCtrl]);

function PersonCtrl($scope, $cookieStore, Person) {
    this.person=Person.get();

    this.savePerson = function(person){
      Person.save(person);
    };
}
