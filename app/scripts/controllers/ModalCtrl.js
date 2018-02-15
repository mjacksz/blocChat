(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        console.log("Inside ModalCtrl.js " + Room );
        this.Rooms = Room.all;
        
       
  this.ok = function() {
    console.log("At the this.ok " + this.searchTerm );
    Room.add(this.searchTerm);
    $uibModalInstance.close();
  };
      
  this.cancel = function() {
    console.log(" ModalCtrl.js $uibModalInstance.cancel");
    $uibModalInstance.close();
    // $uibModalInstance.dismiss('cancel');
  };
}

angular.module('blocChat')
        .controller('ModalCtrl', ['Room', "$uibModalInstance", ModalCtrl]) 

})();