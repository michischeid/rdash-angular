/**
 * Widget Body Directive
 */

angular
    .module('Portal')
    .directive('rdWidgetBody', rdWidgetBody);

function rdWidgetBody() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            loading: '@?',
            classes: '@?'
        },
        transclude: true,
        template: '<div ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" ng-transclude></div></div>',
        restrict: 'E'
    };
    return directive;
};