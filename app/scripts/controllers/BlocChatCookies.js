(function() {
  function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      // var currentUser = $cookies.get('blocChatCurrentUser');
      console.log("BlocChatCookies.js - Value of currentUser is: " + currentUser);
      // console.log("New Message from usernameCtrl", "currentUser");
      console.log("BlocChatCookies.js - value of $cookies is: " + $cookies);
      console.log("BlocChatCookies.js - value of currentUser is: " + currentUser);
      
      if (!currentUser || currentUser === '' ) {   // Test #1
        console.log("BlocChatCookies.js - currentUser ");
        
   
        $uibModal.open({
        // Modal configuration object properties            
            templateUrl: '/templates/username.html',
            controller: 'ModalCtrl',
            //controller: 'BlocChatCookies',
            //controllerAs: "username"
            controllerAs: "modal"           
            });             
      
        console.log("BlocChatCookies.js - finish");  
      }
      console.log("BlocChatCookies.js - if currentUser fails ");
  }
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();