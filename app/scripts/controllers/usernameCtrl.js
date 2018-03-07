(function() {
  function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        $uibModal.open({
        // Modal configuration object properties
            currentUser.put("blocChatCurrentUser");
            console.log("usernameCtrl - currentUser is: " + currentUser);
            //templateUrl: '/templates/username.html',
            //controller: 'usernameCtrl',
            //controllerAs: "username"
            });
        $uibModal.close();
        // };
        // this.ok = function() {
        // console.log("At the this.ok " + this.searchTerm );
        // Room.add(this.searchTerm);
        
      };
  }
}

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();