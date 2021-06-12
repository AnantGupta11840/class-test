
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCcaGBPD5WPC1qeXGBBGiWWz9ysQoDmYWY",
      authDomain: "class-test-4bbed.firebaseapp.com",
      databaseURL: "https://class-test-4bbed-default-rtdb.firebaseio.com",
      projectId: "class-test-4bbed",
      storageBucket: "class-test-4bbed.appspot.com",
      messagingSenderId: "651298553232",
      appId: "1:651298553232:web:0be2c806fdc1cd33dbc715"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
