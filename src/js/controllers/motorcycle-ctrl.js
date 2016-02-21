/**
 * Master Controller
 */

angular.module('Portal')
    .controller('MotorcycleCtrl', ['$scope', '$cookieStore', 'Motorcycle', MotorcycleCtrl]);

function MotorcycleCtrl($scope, $cookieStore, Motorcycle) {
    this.newMotorcycle={};
    this.motorcycles = Motorcycle.query();


    this.saveMotorcycle = function (motorcycle) {
        Motorcycle.save(motorcycle);
    };
    this.deleteMotorcycle = function (motorcycle) {
        Motorcycle.delete(motorcycle);
    };
    this.addMotorcycle = function (motorcycle) {
        Motorcycle.add(motorcycle);
        this.newMotorcycle={};
        this.motorcycles = Motorcycle.query();
    };


}