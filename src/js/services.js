var backend = angular.module('backend', ['ngResource']);

backend.factory('Person', ['$resource',
    function ($resource) {
        console.log("a");
        return $resource('http://portal.klassik-motorsport.de/services/person.php', {}, {
            get: {
                method: 'GET',
                transformResponse: dateTransformer
            },
            save: {
                method: 'PUT'
            }
        });
    }]);

function dateTransformer (data, header) {
    var object = JSON.parse(data);
    if (object.birthday && object.birthday != "") {
        object.birthday = new Date(object.birthday);
    }
    return object;
}
