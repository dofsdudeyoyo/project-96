var firebaseConfig = {
    apiKey: "AIzaSyCOiFoFnABWccNOEEz5HA7z-GK21od3i5A",
    authDomain: "class-test-b6b6a.firebaseapp.com",
    databaseURL: "https://class-test-b6b6a-default-rtdb.firebaseio.com",
    projectId: "class-test-b6b6a",
    storageBucket: "class-test-b6b6a.appspot.com",
    messagingSenderId: "185828936340",
    appId: "1:185828936340:web:2484fc3455732b7f748281"
  };
  firebase.initializeApp(firebaseConfig);
function send(){
    msg=document.getElementById("msg").ariaValueMax;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/")+room_name.on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
