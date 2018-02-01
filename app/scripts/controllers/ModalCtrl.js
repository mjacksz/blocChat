(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.Rooms = Room.all;
        // we'll use this in our `ng-model` for the text input in the view
       
        // add a room.hjere
  this.ok = function() {
  	console.log("OK ");
    $uibModalInstance.close();
  };

  this.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
    }

angular.module('blocChat')
        .controller('ModalCtrl', ['Room', "$uibModalInstance", ModalCtrl]) 

})();