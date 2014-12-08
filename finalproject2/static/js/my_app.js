var codehard = angular.module('myApp', []);
    
   codehard.controller('myController', ['$scope', '$http',
        function($scope, $http) {
            $http.get('/user/profile')
            .success(function(data, status, headers, config) {
                $scope.user = data;
                $scope.error = "";
            }).
            error(function(data, status, headers, config) {
                $scope.user = {};
                $scope.error = data;
            });
        }
]);
   codehard.controller('listController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('/students/list')
        .success(function(data, status, headers, config) {
            $scope.students = data;
            $scope.error = "";
        }).
        error(function(data, status, headers, config) {
            $scope.user = {};
            $scope.error = data;
        });
    }


    ]);