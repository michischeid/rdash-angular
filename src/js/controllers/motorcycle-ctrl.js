/**
 * Master Controller
 */

angular.module('Portal')
    .controller('MotorcycleCtrl', ['$scope', '$cookieStore', 'Motorcycle', MotorcycleCtrl]);

function MotorcycleCtrl($scope, $cookieStore, Motorcycle) {
    var ctrl = this;
    this.newMotorcycle = {
        brand: "",
        model: "",
        year: "",
        capacity: "",
        cylinderCnt: "",
        class: "",
        serialNo: ""
    };
    this.motorcycles = Motorcycle.query();

    this.collapse = function (motorcycle) {
        motorcycle.status = false;
    }

    this.saveMotorcycle = function (motorcycle) {
        motorcycle.$save(function (response) {
            motorcycle.oldId = oldId;
            ctrl.motorcycles = Motorcycle.query();
        });
       this.collapse();

    };
    this.deleteMotorcycle = function (motorcycle, $index) {
        motorcycle.$remove();
        this.motorcycles.splice($index, 1);
    };
    this.addMotorcycle = function (motorcycle) {
        Motorcycle.add(motorcycle);
        this.newMotorcycle = {
            brand: "",
            model: "",
            year: "",
            capacity: "",
            cylinderCnt: "",
            class: "",
            serialNo: "",
            status: false
        };
        this.motorcycles = Motorcycle.query();
    };


}