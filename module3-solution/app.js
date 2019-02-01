(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItemsDirective);

    function foundItemsDirective() {
        var ddo = {
            restrict: 'E',
		    templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&',
                emptySearch: '<'
            }
        };
        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;

        ctrl.getMatchedMenuItems = function (searchTerm) {

                var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
                ctrl.foundMenu = [];
                console.log(ctrl.foundMenu);
                promise.then(function (response) {
                    ctrl.foundMenu = response;

                if (ctrl.foundMenu.length > 0){
                  ctrl.emptySearchTerm = false;
                } else {
                  ctrl.emptySearchTerm = true;
                }

                console.log(ctrl.emptySearchTerm);
                }).catch(function (error) {
                    console.log("error");
                })

        };

        ctrl.removeItem = function(index) {
            return ctrl.foundMenu.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json",
            }).then(function(response) {
                var foundItems = [];

              for ( var i = 0 ; i < response.data.menu_items.length ; i++ ) {
                  if ( response.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) !== -1 ) {
                        foundItems.push( response.data.menu_items[i] );
                  }
              }
                console.log(foundItems.length);
                console.log(foundItems);
                return foundItems;
            }).catch(function (error) {
                console.log("failed to receive the requested data");
            });
        };
    }
})();
