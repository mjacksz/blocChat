(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        console.log("Inside ModalCtrl.js " + Room );
        this.Rooms = Room.all;
        // we'll use this in our `ng-model` for the text input in the view
       
        // add a room.hjere
  this.ok = function() {
    console.log(" ModalCtrl.js $uibModalInstance.close " + Room );
    $uibModalInstance.close();
  };
    
   this.submit = function() {
    console.log(" ModalCtrl.js $uibModalInstance.submit " + Room );
    $uibModalInstance.submit();
  };     

  this.cancel = function() {
    console.log(" ModalCtrl.js $uibModalInstance.cancel");
    $uibModalInstance.cancel();
    // $uibModalInstance.dismiss('cancel');
  };
}

angular.module('blocChat')
        .controller('ModalCtrl', ['Room', "$uibModalInstance", ModalCtrl]) 

})();