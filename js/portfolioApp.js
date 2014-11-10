//This line below shows the portfolioApp module object being created in the JS code
var portfolioApp = angular.module('portfolioApp', []);
//This line shows the PortfolioController code being added to the portfolioApp module
portfolioApp.controller('PortfolioController', function($scope) {
    //these three lines show the initial values of hte scope being defined
    $scope.first = 'Some';
    $scope.last = 'One';
    $scope.heading = 'Message: ';
    //these lines show the updateMessage() defined in the scope
    $scope.updateMessage = function() {
        $scope.message = 'Welcome ' + $scope + ' ' + $scope.last + '!';
    };

});
