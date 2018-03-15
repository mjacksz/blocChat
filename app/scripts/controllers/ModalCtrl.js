(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        console.log("Inside ModalCtrl.js " + Room );
        //this.Rooms = Room.all;
        this.roomerror = "";     
       
  this.ok = function() {
    console.log("At the this.ok " + this.searchTerm );
    //
    // check input - not empty not spaces
    //
    Room.add(this.searchTerm);
    $uibModalInstance.close();
  };
      
  this.cancel = function() {
    console.log(" ModalCtrl.js $uibModalInstance.cancel");
    $uibModalInstance.close();
    // $uibModalInstance.dismiss('cancel');
  };
        
  this.setUserName = function()  {
    //
    // check if entry is empty and not spaces
    //  if (!currentUser || currentUser === '') {
    //
    console.log("ModalCtrl.js - From BlocChatCookies", this.username);
    $cookies.put("blocChatCurrentUser", this.username);  // Does the Value of BCC show up?
    $uibModalInstance.close();
    };
      
      
  }
        
 
angular.module('blocChat')
        .controller('ModalCtrl', ['Room', "$uibModalInstance", "$cookies", ModalCtrl]) 

})();