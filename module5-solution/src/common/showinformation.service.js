(function () {
'use strict';

angular.module('common')
.service('ShowInformationService', ShowInformationService);

ShowInformationService.$inject = [];
function ShowInformationService() {
   var service = this;

   service.saveInformation = function (information) {
       service.information = information;
    };

  service.getInformation = function (){
    return service.information;

  };

    // service.confirmUserSignUp = function(confirmation){
    //   if (confirmation === true){
    //     service.confirm = true;
    //   }
    //   else {
    //     service.confirm = false;
    //   }
    // };

  };


})();
