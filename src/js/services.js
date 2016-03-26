var backend = angular.module('backend', ['ngResource', 'MessageCenterModule']);

/**
 * Person service
 */
backend.factory('Person', ['$resource', 'messageCenterService',
    function ($resource, messageCenterService) {
        return $resource('https://portal.klassik-motorsport.de/services/person.php', {}, {
            get: {
                method: 'GET',
                transformResponse: stringToDate,
                interceptor: {
                    responseError: function (data) {
                        notifyLoadingError(data.status, messageCenterService);
                    }
                }
            },
            save: {
                method: 'PUT',
                transformResponse: stringToDate,
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess(messageCenterService);
                    },
                    responseError: function (data) {
                        notifySaveError(data.errorCode, messageCenterService);
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
        return $resource('https://portal.klassik-motorsport.de/services/motorcycle.php', {id: '@id'}, {
            get: {
                method: 'GET',
                transformResponse: stringToDate,
                interceptor: {
                    responseError: function (data) {
                        notifyLoadingError(data.errorCode, messageCenterService);
                    }
                }
            },
            query: {
                method: 'GET',
                isArray: true,
                transformResponse: stringToDate,
                interceptor: {
                    responseError: function (data) {
                        notifyLoadingError(data.errorCode, messageCenterService);
                    }
                }
            },
            add: {
                method: 'POST',
                transformResponse: stringToDate,
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess(messageCenterService);
                        return data;
                    },
                    responseError: function (data) {
                        notifySaveError(data.errorCode, messageCenterService);
                    }
                }
            },
            save: {
                method: 'PUT',
                transformResponse: stringToDate,
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess(messageCenterService);
                        return data;
                    },
                    responseError: function (data) {
                        notifySaveError(data.errorCode, messageCenterService);
                    }
                }
            },
            remove: {
                method: 'DELETE',
                transformResponse: stringToDate,
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess(messageCenterService, "Das Motorrad wurde erfolgreich gelöscht!");
                    },
                    responseError: function (data) {
                        notifySaveError(data.errorCode, messageCenterService, "Das Motorrad konnte nicht gelöscht werden!");
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
        return $resource('https://portal.klassik-motorsport.de/services/participation.php', {id: '@id'}, {
            query: {
                method: 'GET',
                isArray: true,
                transformResponse: stringToDate,
                interceptor: {
                    responseError: function (data) {
                        notifyLoadingError(data.errorCode, messageCenterService);
                    }
                }
            },
            add: {
                method: 'POST',
                transformResponse: stringToDate,
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess(messageCenterService);
                        return data;
                    },
                    responseError: function (data) {
                        notifySaveError(data.errorCode, messageCenterService);
                    }
                }
            },
            remove: {
                method: 'DELETE',
                transformResponse: stringToDate,
                interceptor: {
                    response: function (data) {
                        notifySaveSuccess(messageCenterService, "Die Teilnahme wurde erfolgreich gelöscht!");
                    },
                    responseError: function (data) {
                        notifySaveError(data.errorCode, messageCenterService, "Die Teilnahme konnte nicht gelöscht werden!");
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
        return $resource('https://portal.klassik-motorsport.de/services/event.php', {}, {
            query: {
                method: 'GET',
                transformResponse: stringToDate,
                isArray: true,
                interceptor: {
                    responseError: function (data) {
                        notifyLoadingError(data.errorCode ,messageCenterService);
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
function stringToDate(data, header, status) {
    redirectIfNotAuthorized(status);
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

function notifyLoadingError(errorCode, messageCenterService, text, timeout) {
    if (!text) {
        text = 'Ihre Daten konnten nicht geladen werden. Bitte überprüfen Sie ihre Internetverbindung!';
    }
    if (!timeout) {
        timeout = 3000;
    }
    messageCenterService.add('danger', text, {timeout: timeout});
}

function notifySaveError(errorCode, messageCenterService, text, timeout) {
    if (!text) {
        text = 'Ihre Daten konnten nicht gespeichert werden. Bitte überprüfen Sie ihre Internetverbindung!';
    }
    if (!timeout) {
        timeout = 3000;
    }
    messageCenterService.add('danger', text, {timeout: timeout});
}

function redirectIfNotAuthorized(errorCode){
    console.log(errorCode);
    if(errorCode==403) {
        window.location.replace("/index.html");
    }
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

