(function() {
  function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        $uibModal.open({
        // Modal configuration object properties
            templateUrl: '/templates/username.html',
            controller: 'usernameCtrl',
            controllerAs: "username"
            });
        $uibModalInstance.close();
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