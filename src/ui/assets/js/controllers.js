'use strict';

var articlesModule = angular.module('articlesModule', ['ui.bootstrap']);


articlesModule.controller('datePicker', function ($scope) {
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
});

articlesModule.controller('articlesforDay', function ($scope, $http) {

    $scope.articlesForDay = function (date) {
        
        $scope.date = date;

        var queryString = createQueryStringForDay($scope.date);

        $http({
            method: 'GET',
            url: queryString
        }).then(function (response) {
            $scope.articles = response.data;
        });
    };

    $scope.date = new Date();

    $scope.articlesForDay($scope.date);

});

articlesModule.controller('articleController', function ($scope, $http) {
    $scope.expand = function (item) {

        item.text = null;

        var queryString = createQueryStringForArticle(item.id);

        $http({
            method: 'GET',
            url: queryString
        }).then(function (response) {

            $scope.paragraphs = response.data;
        });

    };
});

function convertForQuery(name, value) {

    return name + "=" + value + "&";

}

function createQueryStringForDay(date) {

    return "/day?" + convertForQuery('year', date.getFullYear()) + convertForQuery('month', date.getMonth() + 1) + convertForQuery('day', date.getDate());

}

function createQueryStringForArticle(id) {

    return "/article?" + convertForQuery('id', id);

}
