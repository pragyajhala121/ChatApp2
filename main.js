  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAwCf4uY770z9LmKNukjE9lraA9PwMav0Q",
    authDomain: "chatapp-d7a02.firebaseapp.com",
    databaseURL: "https://chatapp-d7a02-default-rtdb.firebaseio.com",
    projectId: "chatapp-d7a02",
    storageBucket: "chatapp-d7a02.appspot.com",
    messagingSenderId: "630246564324",
    appId: "1:630246564324:web:85f2b91f29592057be67f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
      purpose : "add user"
 })
  }