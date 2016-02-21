/**
 * Master Controller
 */

angular.module('Portal')
    .controller('MotorcycleCtrl', ['$scope', '$cookieStore', 'Motorcycle', MotorcycleCtrl]);

function MotorcycleCtrl($scope, $cookieStore, Motorcycle) {
    this.newMotorcycle={
        brand:"",
        model:"",
        year:"",
        capacity:"",
        cylinderCnt:"",
        class:"",
        serialNo:""
    };
    this.motorcycles = Motorcycle.query();


    this.saveMotorcycle = function (motorcycle) {
        Motorcycle.save(motorcycle);
        motorcycle.status=false;
        this.motorcycles = Motorcycle.query();
    };
    this.deleteMotorcycle = function (motorcycle,$index) {
        Motorcycle.remove(motorcycle);
        this.motorcycles.splice($index,1);
    };
    this.addMotorcycle = function (motorcycle) {
        Motorcycle.add(motorcycle);
        this.newMotorcycle={
            brand:"",
            model:"",
            year:"",
            capacity:"",
            cylinderCnt:"",
            class:"",
            serialNo:""
        };
        this.motorcycles = Motorcycle.query();
        this.newMotorcycle.status=false;
    };


}