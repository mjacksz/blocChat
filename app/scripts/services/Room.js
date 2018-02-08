(function() {
  function Room($firebaseArray) {
    console.log("Inside Room.js ")
    var Room = {};
    
    // Both lines are needed
    var ref = firebase.database().ref().child("rooms"); // A reference to the Firebase database ?
    var rooms = $firebaseArray(ref);
    console.log("Inside Room.js - var ref, rooms " + rooms);

    console.log("Just before Room.all - rooms");
      
    Room.all = rooms;
      
    console.log("Just after Room.all B4 Room.add");
      
    Room.add = function(room) {
        console.log("YES YES YES Room.js - Room.add ");
        //Use the firebase method $add here
        //rooms.$add(room).then(function(ref)       
        //rooms.$add
        rooms.$add(room); //.then(function(ref) { 
        var id = ref.key;
        console.log("Inside Room.js - Room.add function " + rooms.$indexFor(id));         
        //});
    }
                               
        
    console.log("Room.js - after Room.add");
    return Room;
   }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]); // Inject the $firebaseArray service
})();