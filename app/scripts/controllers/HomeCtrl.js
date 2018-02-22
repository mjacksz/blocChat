(function() {
    console.log("Inside HomeCtrl");
    //function HomeCtrl(Room, $uibModal, Message) {
     function HomeCtrl(Room, $uibModal) {
        
        this.Rooms = Room.all;
            
        this.open = function() {
        $uibModal.open({
          templateUrl: '/templates/Modal.html',
          controller: 'ModalCtrl',
          controllerAs: "modal"
        });
    };
       /*
        this.select = function(roomID) {
            console.log("roomID: " + roomID);
            this.Messages = Message.getByRoomId(roomID);
            console.log(this.Messages);          
        }
       */     
            
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ["Room" ,"$uibModal", HomeCtrl]);
        //.controller('HomeCtrl', ["Room" ,"$uibModal", "Message", HomeCtrl]);
        //.controller('HomeCtrl', ["Room" ,"$uibModal", "Message"]);
})();