angular.module('myApp', [])
	.run(function($rootScope){
		$rootScope.selectedEmail = "test@test.com"; 
	})
   .controller('myController', ['$scope', '$http', '$rootScope',
        function($scope, $http, $rootScope) {
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
   .controller('listController', ['$scope', '$http', '$rootScope',
		function($scope, $http, $rootScope) {
			
			$scope.getSelectedUser = function(user)
			{
				$rootScope.selectedEmail = user;
				//$scope.selectedEmail = user;
				console.log(user);
			}
		
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
