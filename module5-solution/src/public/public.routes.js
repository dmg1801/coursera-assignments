(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    //HOME
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    //MENU
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    //MENU ITEMS
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    //INFORMATION
    .state('public.information', {
      url: '/information',
      templateUrl: 'src/public/information/information.html',
      controller: 'ShowInformationController',
      controllerAs: 'show',
      resolve: {
      toshow: ['ShowInformationService', function (ShowInformationService){
        return ShowInformationService.getInformation();
      }]
    }
    })
    //SIGN UP
    .state('public.signup', {
      url: '/sign-up',
      templateUrl: 'src/public/sign-up/sign-up.html',
      controller: 'SignUpController',
      controllerAs: 'sign'
      //resolve: {
        //menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          //return MenuService.getMenuItems($stateParams.category);
        //}]
      //}
    });
}
})();
