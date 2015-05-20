describe('PhoneCat controllers', function() {
  beforeEach(module('phonecat.phones.detail.controller'));

  describe('PhoneDetailCtrl', function(){
    var scope, $httpBackend, ctrl,
        xyzPhoneData = function() {
          return {
            name: 'phone xyz',
                images: ['image/url1.png', 'image/url2.png']
          };
        };

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());
      $httpBackend.expectGET('phones/phones.json').respond([]);

      $routeParams.phoneId = 'xyz';
      scope = $rootScope.$new();
      ctrl = $controller('PhoneDetailController', {$scope: scope});
    }));


    it('should fetch phone detail', function() {
      scope.phone.should.equalData({});
      $httpBackend.flush();

      scope.phone.should.equalData(xyzPhoneData());
    });
  });
});