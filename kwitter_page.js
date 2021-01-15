//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAwvXN25ogbZGZdAhC3KZidPCaN7CVHFl4",
      authDomain: "kwitter-532b5.firebaseapp.com",
      databaseURL: "https://kwitter-532b5-default-rtdb.firebaseio.com",
      projectId: "kwitter-532b5",
      storageBucket: "kwitter-532b5.appspot.com",
      messagingSenderId: "143979462396",
      appId: "1:143979462396:web:9438489b6716a4bf986179",
      measurementId: "G-8FKYZL12WW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function send() { message = document.getElementById('message').value; firebase.database().ref(room_name).push({ name: username, msg: message, like:0 }); document.getElementById("message").value = ""; }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
  name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png>' </h4>" ;
  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";  
  like_with_tag = "<button class='btn-warning' id="+firebase_message_id+" value="+like+" onclick='likeUpdate(this.id)'> ";
  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: "+like+" </span> </button> <hr>";
  row = name_with_tag + message_with_tag + like_with_tag + span_with_tag;
  document.getElementById("output").innerHTML += row;  

  
//End code
      } });  }); }
getData();
function likeUpdate(message_id){
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updatedLikes = Number(likes) + 1;
   firebase.database().ref(room_name).child(message_id).update({
         like: updatedLikes
   });
}
username = localStorage.getItem('user_name');
room_name = localStorage.getItem('roomname');


function logout(){
      localStorage.removeItem('user_name');
      localStorage.removeItem('roomname');
      window.location.replace('kwitter.html');
}
