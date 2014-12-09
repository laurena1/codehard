//This is the controller for the Angularjs which controls the execution or our application within the angular scope. Chern and Lauren worked a little more on this -->
var codehard = angular.module('myApp', [])

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
	])
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
	
	
