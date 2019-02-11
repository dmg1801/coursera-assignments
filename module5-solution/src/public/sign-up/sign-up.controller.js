(function (){
  'use strict'

angular.module('public')
.controller('SignUpController', SignUpController)
.constant('ApiPath', 'https://dmg1801-course5.herokuapp.com');

SignUpController.$inject = ['MenuService', 'ShowInformationService','ApiPath'];
function SignUpController(MenuService, ShowInformationService, ApiPath) {
  var sign = this;


  sign.user = {};
  sign.basePath = ApiPath;
  sign.MessageRequiredFields = false;

  sign.submit = function (shortName) {
    sign.completed = true;

    var promise = MenuService.getItem(shortName);
      sign.category_item = [];
      promise.then(function(response){
      sign.category_item = response;
      ShowInformationService.saveInformation(sign.user);
      // ShowInformationService.confirmUserSignUp(sign.completed);
      console.log(sign.category_item);
    })
  }
};

})();
