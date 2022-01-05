var firebaseConfig = {
    apiKey: "AIzaSyCtiit35h90DL-Z-nBUCbTxNXR6LnSheUs",
    authDomain: "project-95-8f855.firebaseapp.com",
    databaseURL: "https://project-95-8f855-default-rtdb.firebaseio.com",
    projectId: "project-95-8f855",
    storageBucket: "project-95-8f855.appspot.com",
    messagingSenderId: "705937137396",
    appId: "1:705937137396:web:4216d9b6dedd2b0c5708a1"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names=childKey;
    console.log("Room Name -"+Room_names);
    row="<div class='room_name id="+Room_names+"onclick ='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
});});}
  getData();

  function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
  }
  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
        window.location="index.html";
  }