/**
 * Master Controller
 */

angular.module('Portal')
    .controller('MotorcycleCtrl', ['$scope', '$cookieStore', 'Motorcycle', MotorcycleCtrl]);

function MotorcycleCtrl($scope, $cookieStore, Motorcycle) {
    this.newMotorcycle={
        brand:"",
        model:"",
        year:null,
        capacity:null,
        cylinderCnt:null,
        class:null
    };
    this.motorcycles = Motorcycle.query();


    this.saveMotorcycle = function (motorcycle) {
        var obj = Motorcycle.save(motorcycle);
        console.log(JSON.stringify(obj));
        motorcycle.id=obj.id;
        motorcycle.status=false;
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
            year:null,
            capacity:null,
            cylinderCnt:null,
            class:null
        };
        this.motorcycles = Motorcycle.query();
        this.newMotorcycle.status=false;
    };


}