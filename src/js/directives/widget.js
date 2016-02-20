/**
 * Widget Directive
 */

angular
    .module('Portal')
    .directive('rdWidget', rdWidget);

function rdWidget() {
    var directive = {
        transclude: true,
        template: '<uib-accordion-group  is-open="status" panel-class="{{panelClass}}"><div ng-transclude></div></uib-accordion-group>',
        restrict: 'EA',
        scope:
        {
            status:'=',
            "panelClass":'@'
        }
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
};