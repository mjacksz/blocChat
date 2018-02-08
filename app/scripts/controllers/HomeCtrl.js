(function() {
    function HomeCtrl(Room, $uibModal) {
        this.Rooms = Room.all;
        console.log("Inside HomeCtrl" + this.Rooms);
        
        this.open = function() {
        $uibModal.open({
          templateUrl: '/templates/Modal.html',
          controller: 'ModalCtrl',
          controllerAs: "modal"
        });
    };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ["Room" ,"$uibModal", HomeCtrl]);
})();