angular.module('phonecat', [
  'phonecat.authentication',
  'phonecat.phones.list',
  'phonecat.phones.detail',
  'phonecat.phones.detail.edit',
  'phonecat.checkmark.filter'
]).config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/phones', {
    templateUrl: 'phones/list',
    controller: 'PhoneListController'
  }).when('/phones/:phoneId', {
    templateUrl: 'phones/detail',
    controller: 'PhoneDetailController'
  })
  .when('/phones/:phoneId/edit', {
    templateUrl: 'phones/detail/edit',
    controller: 'PhoneEditController'
  })

  .when('/login', {
    templateUrl: 'authentication',
    controller: 'AuthenticationController'
  })

  .otherwise({
    redirectTo: '/phones'
  });
}]);
