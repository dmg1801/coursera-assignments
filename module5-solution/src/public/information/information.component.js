(function () {
"use strict";

angular.module('public')
.component('showInfo', {
  templateUrl: 'src/public/information/show-info.html',
  bindings: {
    showinfo: '<'
  }
});

})();
