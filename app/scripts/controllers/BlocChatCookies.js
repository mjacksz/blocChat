(function() {
  function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      console.log(" New Message rom usernameCtrl", "currentUser");
      if (!currentUser || currentUser === '') {
        $uibModal.open({
        // Modal configuration object properties
            //$cookies.put("blocChatCurrentUser", "JOE");
            
            
            //console.log("usernameCtrl - currentUser is: " + currentUser);
            templateUrl: '/templates/username.html',
            controller: 'ModalCtrl',
            controllerAs: "username"
            });
        
      }; // Line 5
  } // From line 2


  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();