(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);


//MainShoppingListController.$inject = ['ShoppingListService'];
CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var catList = this;
  catList.items = items;

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
