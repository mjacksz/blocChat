(function() {
  function Message($cookies, $firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages").orderByChild("roomId");
    // var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
         console.log("Inside Messages.js - Message.getByRoomID", roomId);
         //return 
        //console.log("Message.js" , $firebaseArray(ref.orderByChild("roomId").equalTo(roomId))) ;
        return $firebaseArray(ref.equalTo(roomId)) ;
         
    };
    
    Message.send = function(newMessage)  {
        //  Send method logic
        console.log("Message.js - Message.send ")
        return $firebaseArray(ref.equalTo(newMessage)) ;
        
    };
      
    return Message;
  }
                     
  angular
    .module('blocChat')
    .factory('Message', ["$cookies", '$firebaseArray', Message]);
    //.factory('Message', ['$firebaseArray', Message]);
})();