(function() {
    console.log("Inside HomeCtrl - Start of HomeCtrl");
    function HomeCtrl(Room, $uibModal, Message) {
    //function HomeCtrl(Room, $uibModal) {
         
        console.log("Inside HomeCtrl - Room is: " + Room);
        console.log("Inside HomeCtrl - $uibModal is: " + $uibModal);
       // console.log("Inside HomeCtrl - Message is: " + Message);
        
        this.Rooms = Room.all;
            
        this.open = function() {
          console.log("HomeCtrl.js - Inside this.open function");
          $uibModal.open({
          templateUrl: '/templates/Modal.html',
          controller: 'ModalCtrl',
          controllerAs: "modal"
          });
        };
         
       
        this.select = function(roomId) {
            console.log("roomID: " + roomId);
            this.Messages = Message.getByRoomId(roomId);
            console.log("HomeCtrl " , this.Messages);          
        }
            
         // this.newMessage ng-model, call Message.send( message )   
    }

    angular
        .module('blocChat')
        //.controller('HomeCtrl', ["Room" ,"$uibModal", HomeCtrl]);
        .controller('HomeCtrl', ["Room" ,"$uibModal", "Message", HomeCtrl]);
        //.controller('HomeCtrl', ["Room" ,"$uibModal", "Message"]);
})();