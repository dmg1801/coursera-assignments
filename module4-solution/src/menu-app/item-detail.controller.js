(function(){
  'use strict';

  angular.module('Data')
  .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['item']
  function ItemDetailController(item){
    var itemDetail = this;

    itemDetail.item = item;
  }
})();
