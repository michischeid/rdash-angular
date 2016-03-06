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
        return $resource('http://portal.klassik-motorsport.de/services/motorcycle.php', {id: '@id'}, {
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
                        notifySaveSuccess(messageCenterService);
                        return data;
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
                        return data;
                    },
                    responseError: function (data) {
                        notifySaveError(messageCenterService);
                    }
                }
            },
            remove: {
                method: 'DELETE',
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess(messageCenterService, "Das Motorrad wurde erfolgreich gelöscht!");
                    },
                    responseError: function (data) {
                        notifySaveError(messageCenterService, "Das Motorrad konnte nicht gelöscht werden!");
                    }
                }
            }
        });
    }]);



/**
 * Motorcycle service
 */
backend.factory('Participation', ['$resource', 'messageCenterService',
    function ($resource, messageCenterService) {
        return $resource('http://portal.klassik-motorsport.de/services/participation.php', {id: '@id'}, {
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
                        notifySaveSuccess(messageCenterService);
                        return data;
                    },
                    responseError: function (data) {
                        notifySaveError(messageCenterService);
                    }
                }
            },
            remove: {
                method: 'DELETE',
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess(messageCenterService, "Die Teilnahme wurde erfolgreich gelöscht!");
                    },
                    responseError: function (data) {
                        notifySaveError(messageCenterService, "Die Teilnahme konnte nicht gelöscht werden!");
                    }
                }
            }
        });
    }]);


/**
 * Event service
 */
backend.factory('Event', ['$resource', 'messageCenterService',
    function ($resource, messageCenterService) {
        return $resource('http://portal.klassik-motorsport.de/services/event.php', {}, {
            query: {
                method: 'GET',
                transformResponse: stringToDate,
                isArray: true,
                interceptor: {
                    responseError: function (data) {
                        notifyLoadingError(messageCenterService);
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
 * @param header: header of response
 */
function stringToDate(data, header) {
    var convertIfSet = function (string) {
        if (string && string != "") {
            return new Date(string);
        }
        return string
    }
    var object = JSON.parse(data);
    object.birthday = convertIfSet(object.birthday);
    object.begin = convertIfSet(object.begin);
    object.end = convertIfSet(object.end);

    return object;
}

function notifyLoadingError(messageCenterService, text, timeout) {
    if (!text) {
        text = 'Ihre Daten konnten nicht geladen werden. Bitte überprüfen Sie ihre Internetverbindung!';
    }
    if (!timeout) {
        timeout = 3000;
    }
    messageCenterService.add('danger', text, {timeout: timeout});
}

function notifySaveError(messageCenterService, text, timeout) {
    if (!text) {
        text = 'Ihre Daten konnten nicht gespeichert werden. Bitte überprüfen Sie ihre Internetverbindung!';
    }
    if (!timeout) {
        timeout = 3000;
    }
    messageCenterService.add('danger', text, {timeout: timeout});
}

function notifySaveSuccess(messageCenterService, text, timeout) {
    if (!text) {
        text = 'Ihre Daten wurden erfolgreich gespeichert!';
    }
    if (!timeout) {
        timeout = 3000;
    }
    messageCenterService.add('success', text, {timeout: timeout});
}

