(function() {
    console.log("Inside HomeCtrl - Start of HomeCtrl");
    function HomeCtrl(Room, $uibModal, Message, $cookies, $firebaseArray ) {
         
        console.log("Inside HomeCtrl - Room is: " + Room);
        console.log("Inside HomeCtrl - $uibModal is: " + $uibModal);
        
        this.Rooms = Room.all;
        this.activeRoomID = null;
        //this.activeRoomId = null;
            
        this.open = function() {
          console.log("HomeCtrl.js - Inside this.open function");
          $uibModal.open({
          templateUrl: '/templates/Modal.html',
          controller: 'ModalCtrl',
          controllerAs: "modal"
          });
        };
         
        
        this.select = function(roomId) {         
            console.log("HomeCtrl.js - this.select - roomID: " + roomId);
            this.activeRoomId = roomId;
            console.log("HomeCtrl.js - this.select - activeRoomId: " + this.activeRoomId);
            this.Messages = Message.getByRoomId(roomId);
            console.log("HomeCtrl.js - this.Message is: " , this.Messages);          
        }
            
        
        this.addMessage = function()  {
            console.log("HomeCtrl.js - Inside this.addMessage - add newMessagew/username to DB - How? ");
            console.log("How do I call Message.js from here. Add to DB there not here ... then why Message.send ? ");
            console.log("HomeCtrl - call Message.send with roomID and newMessage ");
            console.log("HomeCtrl - this.addMessage - after this.roomID call to the Messages script ");
            
            var currentUser = $cookies.get('blocChatCurrentUser');
            
            firebase.database().ref().child("messages").orderByChild("roomID");
            //firebase.database().ref().child("messages").orderByChild("roomId");
            
            console.log("*** HomeCtrl - Check values ROOMID, username ***");  
            console.log("HomeCtrl - username is: " + currentUser);
            console.log("HomeCtrl - After value check ...");
            
            
            var msg = {
                content: this.newMessage,
                sentAt: firebase.database.ServerValue.TIMESTAMP,               
                roomID: this.activeRoomId,               
                username: currentUser               
            };
            Message.send(msg);
            console.log("HomeCtrl - this.addMessage - after Message.send with roomID and newMessage ");
            return
        }
        
        
    }

    angular
        .module('blocChat')
        //.controller('HomeCtrl', ["Room" ,"$uibModal", HomeCtrl]);
        .controller('HomeCtrl', ["Room" ,"$uibModal", "Message", "$cookies", "$firebaseArray", HomeCtrl ]);
        //.controller('HomeCtrl', ["Room" ,"$uibModal", "Message", HomeCtrl ]);
        //.controller('HomeCtrl', ["Room" ,"$uibModal", "Message"]);
})();