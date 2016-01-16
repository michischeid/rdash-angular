/**
 * Widget Directive
 */

angular
    .module('RDash')
    .directive('rdWidget', rdWidget);

function rdWidget() {
    var directive = {
        transclude: true,
        template: '<uib-accordion-group  is-open="status"><div ng-transclude></div></uib-accordion-group>',
        restrict: 'EA',
        scope:
        {
            status:'='
        }
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
};