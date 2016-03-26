'use strict'

var articlesModule = angular.module('articlesModule', []);

articlesModule.controller('articlesforDay', function ($scope, $http) {

    $scope.date = new Date();

    $scope.articlesForDay = function (date) {
        
        var queryString = createQueryString($scope.date);

        $http({
            method: 'GET',
            url: queryString
        }).then(function (response) {
            $scope.name = response.data;
        });
    }


});

function convertForQuery(name, value) {

    return name + "=" + value + "&";

}

function createQueryString(date) {

    return "/day?" + convertForQuery('year', date.getFullYear()) + convertForQuery('month', date.getMonth() + 1) + convertForQuery('day', date.getDate());

}
