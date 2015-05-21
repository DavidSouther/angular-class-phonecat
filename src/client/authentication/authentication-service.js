angular.module('phonecat.authentication.service', [
  'ngCookies'
]).factory('AuthenticationService', function($http, $location, $cookies){
  return {
    login: function(un, pw){
      console.log('Authenticating as %s', un);
      $http.post('/login', {username: un, password: pw})
      .success(function(){
        $location.url('/');
      });
    },
    logout: function(){
      $http.post('/logout').success(function(){
        $location.url('/login');
      });
    },
    isLoggedIn: function(){
      return $cookies['li'] === '1';
    }
  }
});
