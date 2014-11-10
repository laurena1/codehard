var portfolioApp = angular.module('portfolioApp', []);
portfolioApp.controller('PortfolioController', function($scope) {
    $scope.first = 'Some';
    $scope.last = 'One';
    $scope.heading = 'Message: ';
    
    $scope.updateMessage = function() {
        $scope.message = 'Welcome ' + $scope + ' ' + $scope.last + '!';
    };

});