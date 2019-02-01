(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('basicServerRoute',"https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'basicServerRoute']
function MenuDataService($http, basicServerRoute) {
   var service = this;

  service.getAllcategories = function () {
        return $http({
          method: "GET",
          url: (basicServerRoute + "/categories.json")
        }).then(function (response){
          console.log(response.data);
          return response.data
        })
  };

  service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: "GET",
        url: (basicServerRoute + "/menu_items.json?category=" + categoryShortName)
      }).then(function (response){
        console.log(response.data.menu_items);
        return response.data.menu_items;
      })
    };
}

})();
