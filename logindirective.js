(function() {

	'use strict';

	angular.module("logindirective", [])
		.directive("login", function() {
			return {
					restrict : 'E',	
					templateUrl : 'login.html'	
			};
		});
})();