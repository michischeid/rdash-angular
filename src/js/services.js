var backend = angular.module('backend', ['ngResource', 'MessageCenterModule']);

backend.factory('Person', ['$resource','messageCenterService',
    function ($resource, messageCenterService) {
        console.log("a");
        return $resource('http://portal.klassik-motorsport.de/services/person.php', {}, {
            get: {
                method: 'GET',
                transformResponse: stringToDate,
                interceptor: {response: function(data){
                    messageCenterService.add('danger', 'Personendaten konnten nicht geladen werden!', { timeout: 3000 });

                }}
            },
            save: {
                method: 'PUT',
                interceptor: {response: function(data){
                    messageCenterService.add('success', 'Die Änderungen wurden erfolgreich gespeichert!', { timeout: 3000 });

                }}
            }
        });
    }]);

function stringToDate (data, header) {
    var object = JSON.parse(data);
    if (object.birthday && object.birthday != "") {
        object.birthday = new Date(object.birthday);
    }
    return object;
}

