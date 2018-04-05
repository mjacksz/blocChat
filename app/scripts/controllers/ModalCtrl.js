(function() {    
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        console.log("Inside ModalCtrl.js " + Room );
        //this.Rooms = Room.all;
        this.roomerror = "";     
  
  console.log("ModalCtrl.js - above this.ok ");
        
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
        
  console.log("ModalCtrl.js - before this.setUserName ");
        
  this.setUserName = function()  {
    //
    // check if entry is empty and not spaces
    //  if (!currentUser || currentUser === '') {
    //
    console.log("ModalCtrl.js - From BlocChatCookies - username " + this.username);
    
    

    if ( !this.username || this.username === "" || !this.username.trim() )   {
        console.log("ModalCtrl.js - IF / Return")
        return;
    } else { 
        $cookies.put("blocChatCurrentUser", this.username);
        console.log("ModalCtrl.js - this.setUserName");
        $uibModalInstance.close();
    }
    
      
    //  $uibModalInstance.close(); //  take modal.username - process then close modal ??  
      
  }   
  console.log("ModalCtrl.js - leaving function ");
}

        
 
 angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', "$uibModalInstance", "$cookies", ModalCtrl]);

})();