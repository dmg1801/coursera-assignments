(function () {
"use strict";

angular.module('public')
.component('signInfo', {
  templateUrl: 'src/public/sign-up/sign-up-info.html',
  bindings: {
    iteminfo: '<'
  }
});

})();
