(function() {
  function Message($cookies, $firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages").orderByChild("roomId");
    // var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
         console.log("/nInside Messages.js - Message.getByRoomID/n", roomId);
         //return 
        //console.log("Message.js" , $firebaseArray(ref.orderByChild("roomId").equalTo(roomId))) ;
        return $firebaseArray(ref.equalTo(roomId)) ;
         
    };
    
    // blocChat 6 - Sent Message
    // Add a meth to your Message factory called send
    // Submit the argument and submit it to the Firebase DB
    // 
    // Add roomID (key), newMessage, username, date? to DB
    // Parms: newMessage - Message from home.html
    //        roomID - Chat room name (ref)
    // 
    Message.send = function(newMessage )  {
        //  Send method logic
        console.log("Message - Just passed from HomeCtrl with two parms ... ");
        console.log("Message.js - Message.send !! Add to DB !! How ?  ");
        // $firebaseArray(ref.equalTo(roomId)),
        // $firebaseArray(ref.equalTo(roomId)), $firebaseArray.equalTo(newMessage)
            // this.roomID = this.getByRoomID(roomID)
        //console.log("Message.js - Message.send - this.roomID (HomeCtrl) is: " + this.roomID);
        console.log("Message.js - Message.send - Message.send ADD newMessage to DB " + newMessage);
        $firebaseArray.$add(newMessage);
        return 
        // ( $firebaseArray(ref.equalTo(roomId)), $firebaseArray.equalTo(newMessage) ) ) ;
        
    };
      
    return Message;
  }
                     
  angular
    .module('blocChat')
    .factory('Message', ["$cookies", '$firebaseArray', Message]);
    //.factory('Message', ['$firebaseArray', Message]);
})();