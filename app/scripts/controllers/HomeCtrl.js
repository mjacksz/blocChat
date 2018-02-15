(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.Rooms = Room.all;
        console.log("Inside HomeCtrl" + this.Rooms);
        
        this.open = function() {
        $uibModal.open({
          templateUrl: '/templates/Modal.html',
          controller: 'ModalCtrl',
          controllerAs: "modal"
        });
    };
        this.select = function(roomID) {
            console.log("roomID" + roomID);
            this.Messages = Message.getByRoomId(roomID);
            console.log(this.Messages);
            
        }
            
            
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ["Room" ,"$uibModal", "Message", HomeCtrl]);
})();