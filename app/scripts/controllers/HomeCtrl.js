(function() {
    console.log("Inside HomeCtrl - Start of HomeCtrl");
    function HomeCtrl(Room, $uibModal, Message, $cookies, $firebaseArray ) {
         
        console.log("Inside HomeCtrl - Room is: " + Room);
        console.log("Inside HomeCtrl - $uibModal is: " + $uibModal);
        
        this.Rooms = Room.all;
        this.activeRoomID = null;
        //this.activeRoomId = null;
        var t = firebase.database.ServerValue.TIMESTAMP
        
        // Set unix time to 23 hr clock       
    
        convertedTime = function(t) {  
                    console.log("HomeCtrl - convertedTime" + t);
                    var dt = new Date(t*1000);
                    var hr = dt.getHours();
                    var m = "0" + dt.getMinutes();
                    var s = "0" + dt.getSeconds();
                    // return Number(hr+ ':' + m.substr(-2) + ':' + s.substr(-2));
                    return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);
        }
        
        
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
            
            var currentUser = $cookies.get('blocChatCurrentUser');
            console.log("HomeCtrl - username is: " + currentUser);
            
            firebase.database().ref().child("messages").orderByChild("roomID");
            //firebase.database().ref().child("messages").orderByChild("roomId");
           
            // sentAt: firebase.database.ServerValue.TIMESTAMP,
            
            var msg = {
                content: this.newMessage,
                sentAt: convertedTime(firebase.database.ServerValue.TIMESTAMP),               
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