(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
         console.log("Inside Messages.js - Message.getByRoomID");
         return $firebaseArray(ref.orderByChild("roomID").equalTo(roomId));
         
    }
    return Message;
  }
                     
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();