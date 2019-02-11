(function () {

 "use strict";

angular.module('public')
.controller('ShowInformationController', ShowInformationController)
.constant('ApiPath', 'https://dmg1801-course5.herokuapp.com');


 ShowInformationController.$inject = ['toshow', 'MenuService','ApiPath'];
 function ShowInformationController (toshow, MenuService, ApiPath){
   var show = this;

    show.infouser = toshow;
    show.basePath = ApiPath;

if(!(show.infouser == undefined)){
    show.signUpMessage = false;
    show.showcontent = true;

    var promise = MenuService.getItem(show.infouser.short_name);
    show.favoriteItem = [];
    promise.then(function (response){
      show.favoriteItem = response;
      console.log("received favorite item", show.favoriteItem);
    })
  }
  else {
    show.signUpMessage = true;
    show.showcontent = false;
  }

 };
})();
