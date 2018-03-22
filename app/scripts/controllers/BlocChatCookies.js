(function() {
  function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      // var currentUser = $cookies.get('blocChatCurrentUser');
      console.log("BlocChatCookies.js - Value of currentUser is: " + currentUser);
      console.log("New Message from usernameCtrl", "currentUser");
      console.log("BlocChatCookies.js - value of $cookies is: " + $cookies);
      console.log("BlocChatCookies.js - value of currentUser is: " + currentUser);
      
      if (!currentUser || currentUser === '' ) {   // Test #1
        console.log("BlocChatCookies.js - Inside DO loop/n");
        
   
        $uibModal.open({
        // Modal configuration object properties            
            templateUrl: '/templates/username.html',
            controller: 'ModalCtrl',
            //controller: 'BlocChatCookies',
            //controllerAs: "username"
            controllerAs: "modal"           
            });             
      
        //  Add check uibModal 
          
        //  $uibModalInstance.close();
        //   then check inputed field what is the field name ??
        //  if ( !username.setUserName  || username.setUserName === '' || !username.setUserName.trim() )  {
        //      Do nothing - continue to add to cookie field - input is something 
        //     } else  { 
        //      return
        //  }
        console.log("BlocChatCookies.js - finish");  
      }

  }
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();