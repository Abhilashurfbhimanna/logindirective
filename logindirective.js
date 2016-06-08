(function() {

	'use strict';

	angular.module("logindirective", [])
		.directive("login", function() {
			return {
					restrict : 'E',	
					templateUrl : 'bower_components/logindirective/login.html'	
			};
		});
})();
