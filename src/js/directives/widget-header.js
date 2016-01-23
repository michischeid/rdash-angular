/**
 * Widget Header Directive
 */

angular
    .module('RDash')
    .directive('rdWidgetHeader', rdWidgetTitle);

function rdWidgetTitle() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            title: '@',
            icon: '@',
            status:'=',
            subtitle:'@'
        },
        transclude: true,
        template: '<div uib-accordion-heading><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} <span ng-hide="!subtitle" ><br/><h6>{{subtitle}}</h6></span></div><div class="pull-right col-xs-6 col-sm-4"><i class="pull-right glyphicon" ng-class="{\'glyphicon-chevron-down\': status, \'glyphicon-chevron-right\': !status}"></i></div></div></div>',
        restrict: 'E'
    };
    return directive;
};