(function () {
'use strict';

angular.module('Data')
.component('specificItem', {
  templateUrl: 'src/menu-app/templates/item.template.html',
  bindings: {
    item: '<'
  }
});

})();
