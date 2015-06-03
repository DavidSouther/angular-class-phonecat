PhoneService.$inject = ['$resource', '$ajaxLog'];
function PhoneService($resource, $log, $screenshots){
  return $resource('/api/phonecat/phones/:phoneId', {
    phoneId: '@id'
  });
}

function StaticPhoneService($resource){
  return $resource('/phones/:phoneId.json', [], {
    query: {
      method: 'GET',
      params: {
        phoneId: 'phones'
      },
      isArray: true
    }
  });
}

angular.module('phonecat.phones.service', [
  'ngResource'
])
.factory('Phone', PhoneService)
.factory('StaticPhone', StaticPhoneService)
.run(function($location, Phone, StaticPhone){
  if(!$location.search().migrate){
    return;
  }
  StaticPhone.query(function(phones){
    phones.forEach(function(data){
      StaticPhone.get({phoneId: data.id}, function(phone){
        (new Phone(data)).$save(function(){
          console.log("Saved phone %o", phone);
        });
      })
    });
  });
});
;
