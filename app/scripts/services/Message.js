(function() {
  function Message($cookies, $firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages").orderByChild("roomID");
    //var ref = firebase.database().ref().child("messages").orderByChild("roomId");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        console.log("Inside Messages.js - Message.getByRoomID", $firebaseArray(ref.equalTo(roomId)));
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
        console.log(newMessage);
        console.log("Message.js - Message.send !! Add to DB !! How ?  ");    
        console.log("Message.js - Message.send - Message.send ADD newMessage to DB " + newMessage);
        
        messages.$add(newMessage).then(function(){ console.log("Messages.js - ", messages )});
               
        return        
    };
      
    return Message;
  }
                     
  angular
    .module('blocChat')
    .factory('Message', ["$cookies", '$firebaseArray', Message]);
    //.factory('Message', ['$firebaseArray', Message]);
})();