var backend = angular.module('backend', ['ngResource', 'MessageCenterModule']);

/**
 * Person service
 */
backend.factory('Person', ['$resource', 'messageCenterService',
    function ($resource, messageCenterService) {
        return $resource('http://portal.klassik-motorsport.de/services/person.php', {}, {
            get: {
                method: 'GET',
                transformResponse: stringToDate,
                interceptor: {
                    responseError: function (data) {
                        notifyLoadingError(messageCenterService);
                    }
                }
            },
            save: {
                method: 'PUT',
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess(messageCenterService);
                    },
                    responseError: function (data) {
                        notifySaveError(messageCenterService);
                    }
                }
            }
        });
    }]);


/**
 * Motorcycle service
 */
backend.factory('Motorcycle', ['$resource', 'messageCenterService',
    function ($resource, messageCenterService) {
        return $resource('http://portal.klassik-motorsport.de/services/motorcycle.php', {id:'@id'}, {
            get: {
                method: 'GET',
                interceptor: {
                    responseError: function (data) {
                        notifyLoadingError(messageCenterService);
                    }
                }
            },
            query: {
                method: 'GET',
                isArray: true,
                interceptor: {
                    responseError: function (data) {
                        notifyLoadingError(messageCenterService);
                    }
                }
            },
            add: {
                method: 'POST',
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess();
                    },
                    responseError: function (data) {
                        notifySaveError(messageCenterService);
                    }
                }
            },
            save: {
                method: 'PUT',
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess(messageCenterService);
                    },
                    responseError: function (data) {
                        notifySaveError(messageCenterService);
                    }
                }
            }
        });
    }]);


/**
 * Helper Functions
 */

/**
 * stringToDate
 * @param data: Is the body
 * @param heade: header of response
 */
function stringToDate(data, header) {
    var object = JSON.parse(data);
    if (object.birthday && object.birthday != "") {
        object.birthday = new Date(object.birthday);
    }
    return object;
}

function notifyLoadingError(messageCenterService,text, timeout) {
    if (!text) {
        text = 'Ihre Daten konnten nicht geladen werden. Bitte überprüfen Sie ihre Internetverbindung!';
    }
    if (!timeout) {
        timeout = 3000;
    }
    messageCenterService.add('danger', text, {timeout: timeout});
}

function notifySaveError(messageCenterService,text, timeout) {
    if (!text) {
        text = 'Ihre Daten konnten nicht gespeichert werden. Bitte überprüfen Sie ihre Internetverbindung!';
    }
    if (!timeout) {
        timeout = 3000;
    }
    messageCenterService.add('danger', text, {timeout: timeout});
}

function notifySaveSuccess(messageCenterService,text, timeout) {
    if (!text) {
        text = 'Ihre Daten wurden erfolgreich gespeichert!';
    }
    if (!timeout) {
        timeout = 3000;
    }
    messageCenterService.add('success', text, {timeout: timeout});
}

