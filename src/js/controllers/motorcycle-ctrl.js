/**
 * Master Controller
 */

angular.module('Portal')
    .controller('MotorcycleCtrl', ['$scope', '$cookieStore', MotorcycleCtrl]);

function MotorcycleCtrl($scope, $cookieStore) {
    this.motorcycles = [{
        brand: "Yamaha",
        year: 1997,
        model: "TRX 850",
        cyclinderCnt: 2,
        capacity: 850
    },
        {
            brand: "Yamaha",
            year: 1997,
            model: "TRX 860",
            cyclinderCnt: 2,
            capacity: 850
        },
        {
            brand: "Yamaha",
            year: 1997,
            model: "TRX 870",
            cyclinderCnt: 2,
            capacity: 850
        }];

}