'use strict';

var articlesModule = angular.module('articlesModule', ['ngAnimate', 'ui.bootstrap']);

articlesModule.controller('articlesForDay', function ($scope, $http) {

    $scope.today = function () {
        $scope.date = new Date();
    };
    $scope.today();

    $scope.open = function () {
        $scope.popup.opened = true;
    };

    $scope.format = 'dd.MM.yyyy';

    $scope.popup = {
        opened: false
    };

    $scope.articlesForDay = function () {

        var queryString = createQueryStringForDay($scope.date);

        $http({
            method: 'GET',
            url: queryString
        }).then(function (response) {

            $scope.articles = response.data;

            $scope.isCollapsed = !$scope.isCollapsed;
        });

    };

    $scope.date = new Date();

    $scope.articlesForDay($scope.date);

});

articlesModule.controller('articleController', function ($scope, $http) {

    $scope.isCollapsed = true;

    $scope.expand = function (item) {

        var queryString = createQueryStringForArticle(item._id);
        if (!$scope.paragraphs) {
            $http({
                method: 'GET',
                url: queryString
            }).then(function (response) {

                $scope.paragraphs = response.data;

                $scope.isCollapsed = !$scope.isCollapsed;

            });
        } else {
            $scope.isCollapsed = !$scope.isCollapsed;
        }
    };
});

function convertForQuery(name, value) {

    return name + '=' + value + '&';

}

function createQueryStringForDay(date) {

    return '/day?' +
        convertForQuery('year', date.getFullYear()) +
        convertForQuery('month', date.getMonth() + 1) +
        convertForQuery('day', date.getDate());

}

function createQueryStringForArticle(id) {

    return '/article?' + convertForQuery('id', id);

}
