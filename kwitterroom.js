const firebaseConfig = {
    apiKey: "AIzaSyCuEcR5GkJJxcgNJ_q_LvIICeB2dspBOPc",
    authDomain: "lets-chatt-web-app.firebaseapp.com",
    databaseURL: "https://lets-chatt-web-app-default-rtdb.firebaseio.com",
    projectId: "lets-chatt-web-app",
    storageBucket: "lets-chatt-web-app.appspot.com",
    messagingSenderId: "236012059073",
    appId: "1:236012059073:web:ea4c5fa9901ea539e05740"
  };
function addRoom()
{
 room_name=document.getElementById("room_name").value
 firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
 })}
 function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});
 function logout() {
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location="index.html"
}}
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}