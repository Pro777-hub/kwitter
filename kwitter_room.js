
//ADD YOUR FIREBASE LINKS HERE
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


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
      //Start code
      row = "<div class='roomname' id="+Room_names+" onclick='redirectRoomName(this.id)' > # " + Room_names + "</div>" ;
      document.getElementById("output").innerHTML += row;
      
      //End code
      });});}
getData();
function add_room(){
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "Adding room"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html"
}
function redirectRoomName(name){
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}