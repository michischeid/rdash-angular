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

    this.collapse = function (motorcycle){
        motorcycle.status=false;
    }
    this.getFormId = function (motorcycle){
        var oldId = motorcycle.oldId;
        if(!oldId){
            oldId= motorcycle.id;
        }
        return oldId;
    }
    this.saveMotorcycle = function (motorcycle) {
        var oldId = motorcycle.oldId;
        if(!oldId){
           oldId= motorcycle.id;
        }
        motorcycle.$save(function(response){
            console.log(response);
        });
        motorcycle.status=false;
        motorcycle.oldId=oldId;
    };
    this.deleteMotorcycle = function (motorcycle,$index) {
        motorcycle.$remove();
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
            serialNo:"",
            status:false
        };
        this.motorcycles = Motorcycle.query();
    };


}