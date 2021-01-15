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
  

  function adduser(){
      username = document.getElementById("user_name").value;
      firebase.database().ref("/").child(username).update({
          purpose: "Adding user"
      });
  }
