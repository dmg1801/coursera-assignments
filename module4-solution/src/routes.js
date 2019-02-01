(function () {
'use strict';

angular.module('Data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu-app/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menu-app/templates/categories-list.template.html',
    controller: 'CategoriesListController as catList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService){
        return MenuDataService.getAllcategories();
      }]
    }
  })

  .state('itemDetail',{
    url:'/item-detail/{itemId}',
    templateUrl:'src/menu-app/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      item:['$stateParams', 'MenuDataService',
            function($stateParams, MenuDataService){
              return MenuDataService.getItemsForCategory($stateParams.itemId);

              }
      ]
    }
  });
}

})();
