angular.module('phonecat.authentication.controller', [
  'ngMessages',
  'phonecat.authentication.service',
  'phonecat.authentication.passwordValidationDirective'
]).controller('AuthenticationController',
  function($scope, AuthenticationService, $timeout){
    $scope.username = "";
    $scope.password = "";

    $scope.login = function(){
      // Check if valid
      if($scope.loginForm.$invalid){
        return;
      }
      $scope.errorLoggingIn = false;
      AuthenticationService.login(
        $scope.username, $scope.password
      ).error(function(){
        $scope.errorLoggingIn = true;
        $timeout(function(){$scope.errorLoggingIn = false}, 5 * 1000);
      });
    };
  }
)
.controller('LogoutController', function($scope, AuthenticationService){
  $scope.logout = function(){
    AuthenticationService.logout();
  };

  $scope.isLoggedIn = function(){
    return AuthenticationService.isLoggedIn();
  };
})
;
