(function () {

angular.module('SimpleFormsApp',[]);

angular.module('SimpleFormsApp')
.controller('RegistrationController', RegistrationController)
.service('GetItemsService',GetItemsService)
.constant('basicServerRoute',"https://dmg1801-course5.herokuapp.com");

//https://dmg1801-course5.herokuapp.com/menu_items.json

RegistrationController.$inject = ['GetItemsService'];
function RegistrationController(GetItemsService) {
  var reg = this;

  reg.submit = function (shortName) {
    reg.completed = true;
    //var categoryShortName = "";
    //reg.user.short_name = categoryShortName;

    var promise = GetItemsService.getItemsForCategory(shortName);
    reg.category_item = [];
    promise.then(function(response){
      reg.category_item = response;
      console.log(reg.category_item);
    });
  }
};

// END OF RegistrationController
GetItemsService.$inject = ['$http', 'basicServerRoute'];
function GetItemsService($http, basicServerRoute){
var service = this;
service.getItemsForCategory = function (shortName) {
      return $http({
        method: "GET",
        url: (basicServerRoute + "/menu_items/" + shortName + ".json")
      }).then(function (response){
        console.log(response.data);
        return response.data;
      })
    };
  };

})();
