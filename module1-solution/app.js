(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {

$scope.countItems = function() {
    var ListofItems = $scope.itemsList;

    if (ListofItems == null) {
      var messageDataFirst = "Please, enter data first";

      $scope.color_message = 'error';
      $scope.message = messageDataFirst;
    } else {
    var arrayOfStrings = ListofItems.split(',');

    if (arrayOfStrings.length < 4){
      var messageEnjoy = "ENJOY!!!";

      $scope.message = messageEnjoy;
      $scope.color_message = 'success';

    } if (arrayOfStrings.length > 3) {
      var messageTooMuch = "Is too much!!!";

      $scope.message = messageTooMuch;
      $scope.color_message = 'error';

    } 
    console.log('The array has ' + arrayOfStrings.length + ' Items, separated by a comma (,)');
    }
  }
};

})();
