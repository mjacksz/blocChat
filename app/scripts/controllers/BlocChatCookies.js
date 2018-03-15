(function() {
  function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      // var currentUser = $cookies.get('blocChatCurrentUser');
      console.log("BlocChatCookies.js - Value of currentUser is: " + currentUser);
      console.log("New Message from usernameCtrl", "currentUser");
      console.log("BlocChatCookies.js - value of $cookies is: " + $cookies);
      console.log("BlocChatCookies.js - value of currentUser is: " + currentUser);
      
      
      
      if (!currentUser || currentUser === '') {
        console.log("BlocChatCookies.js - Inside IF currentUser statement");
          
        $uibModal.open({
        // Modal configuration object properties            
            templateUrl: '/templates/username.html',
            controller: 'ModalCtrl',
            //controller: 'BlocChatCookies',
            //controllerAs: "username"
            controllerAs: "modal"           
            });
                  
          $cookies.put("blocChatCurrentUser", BlocChatCookies.searchTerm);
          
         // $uibModalInstance.close();
         
        
      } // Line 12
  } // From line 2


  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();