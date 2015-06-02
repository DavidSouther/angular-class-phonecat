angular.module('phonecat.authentication.service', [
  'ngCookies'
]).factory('AuthenticationService', function($http, $location, $cookieStore){
  return {
    login: function(un, pw){
      console.log('Authenticating as %s', un);
      return $http.post('/login', {username: un, password: pw})
      .success(function(){
        $location.url('/');
      });
    },
    logout: function(){
      return $http.post('/logout').success(function(){
        $location.url('/login');
      });
    },
    isLoggedIn: function(){
      return $cookieStore.get('li') === 1;
    }
  }
});
