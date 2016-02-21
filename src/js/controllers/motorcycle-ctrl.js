/**
 * Master Controller
 */

angular.module('Portal')
    .controller('MotorcycleCtrl', ['$scope', '$cookieStore', 'Motorcycle', MotorcycleCtrl]);

function MotorcycleCtrl($scope, $cookieStore, Motorcycle) {
    this.newMotorcycle={};
    this.motorcycles = Motorcycle.query();


    this.saveMotorcycle = function (motorcycle) {
        var obj = Motorcycle.save(motorcycle);
        motorcycle.id=obj.id;
        motorcycle.status=false;
        $scope.$apply();

    };
    this.deleteMotorcycle = function (motorcycle,$index) {
        Motorcycle.remove(motorcycle);
        this.motorcycles.splice($index,1);
        $scope.$apply();
    };
    this.addMotorcycle = function (motorcycle) {
        Motorcycle.add(motorcycle);
        this.newMotorcycle={};
        this.motorcycles = Motorcycle.query();
        motorcycle.status=false;
        $scope.$apply();
    };


}