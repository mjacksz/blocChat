(function() {
    console.log("Inside HomeCtrl - Start of HomeCtrl");
    function HomeCtrl(Room, $uibModal, Message) {
    //function HomeCtrl(Room, $uibModal) {
         
        console.log("Inside HomeCtrl - Room is: " + Room);
        console.log("Inside HomeCtrl - $uibModal is: " + $uibModal);
       // console.log("Inside HomeCtrl - Message is: " + Message);
        
        this.Rooms = Room.all;
        this.activeRoomId = null;
            
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
        
        this.addMessage = function()  {
            console.log("HomeCtrl.js - Inside this.addMessage - add newMessagew/username to DB - How? ");
            console.log("How do I call Message.js from here. Add to DB there not here ... then why Message.send ? ");
            console.log("HomeCtrl - call Message.send with roomID and newMessage ");
            //var roomID = Message.getByRoomId(this.roomId);  // Get roomID
            console.log("HomeCtrl - this.addMessage - after this.roomID call to the Messages script ");
            var msg = {
                content: this.newMessage,
                sentAt: firebase.database.ServerValue.TIMESTAMP,
                roomID: "room1",
                username: "JimBob"
            };
            Message.send(msg);
            console.log("HomeCtrl - this.addMessage - after Message.send with roomID and newMessage ");
            // use Message service to add to firebase DB
            // include username, roomID ?, date
        }
        
        
    }

    angular
        .module('blocChat')
        //.controller('HomeCtrl', ["Room" ,"$uibModal", HomeCtrl]);
        .controller('HomeCtrl', ["Room" ,"$uibModal", "Message", HomeCtrl ]);
        //.controller('HomeCtrl', ["Room" ,"$uibModal", "Message"]);
})();