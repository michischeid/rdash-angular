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
            subtitle:'@',
            location:'@'
        },
        transclude: true,
        template: '<div uib-accordion-heading><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> <span style="font-size: 20px">{{title}} <a href="http://maps.google.com/maps?q={{location}}">{{location}}</a></span> <span ng-hide="!subtitle" ><br/><h5>{{subtitle}}</h5></span></div><div class="pull-right col-xs-6 col-sm-4"><i class="pull-right glyphicon" ng-class="{\'glyphicon-chevron-down\': status, \'glyphicon-chevron-right\': !status}"></i></div></div></div>',
        restrict: 'E'
    };
    return directive;
};