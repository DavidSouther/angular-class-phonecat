angular.module('phonecat.authentication.controller', [
  'phonecat.authentication.service'
]).controller('AuthenticationController',
  function($scope, AuthenticationService){
    $scope.username = "";
    $scope.password = "";

    $scope.login = function(){
      AuthenticationService.login(
        $scope.username, $scope.password
      );
    };
  }
)
.controller('LogoutController', function($scope, AuthenticationService){
  $scope.logout = function(){
    AuthenticationService.logout();
  };
})
;
