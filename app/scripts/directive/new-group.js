'use strict';

/**
 * @author Lars Wiedemann
 * @ngdoc directive
 * @name unchatbar-phone-book.directive:phoneBook
 * @restrict E
 * @description
 *
 * save client connections , for recall
 *
 */
angular.module('unchatbar-phone-book').directive('phoneBookNewGroup', [
    function () {
        return {
            restrict: 'E', //E = element, A = attribute, C = class, M = comment
            replace: true,
            templateUrl:'views/unchatbar-phone-book/addNewGroup.html',
            controller: 'phoneBookAdmin'
        };
    }
]);

