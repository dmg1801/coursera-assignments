(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var buyItem = this;

buyItem.removeAndMove = function (itemIndex){
  ShoppingListCheckOffService.removeItemAndMoveIt(itemIndex);
}

  buyItem.items = ShoppingListCheckOffService.getItems();

  buyItem.showBoughtMessage = function () {
    if (ShoppingListCheckOffService.items == ""){
      return true;
    } else {
      return false;
    }
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
 var boughtItem = this;

  boughtItem.itemsAlreadyBought = ShoppingListCheckOffService.getBoughtItems();

  boughtItem.showNothingBoughtMessage = function () {
    if (ShoppingListCheckOffService.itemsAlreadyBought == ""){
      return true;
    } else {
      return false;
    }
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  service.items = [
    {
      name: "Pizza",
      quantity: 3
    },
    {
      name: "Hummus",
      quantity: 2
    },
    {
      name: "Coca-cola",
      quantity: 1
    },
    {
      name: "Pimentón",
      quantity: 3
    },
    {
      name: "Spaghetti",
      quantity: 1
    }
  ];

  service.itemsAlreadyBought = [];

 service.removeItemAndMoveIt = function (itemIndex) {
    var listToRemove = service.items.splice(itemIndex, 1)[0];
    service.itemsAlreadyBought.push(listToRemove);
  };

  service.getItems = function () {
    return service.items;
  };
  //
  service.getBoughtItems = function () {
  return service.itemsAlreadyBought;
  };
}

})();
