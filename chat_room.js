const firebaseConfig = {
  apiKey: "AIzaSyBVwHOJ3tWgBS8oLS707GdYdG7-uMSGy08",
  authDomain: "appvamosconversar2.firebaseapp.com",
  databaseURL: "https://appvamosconversar2-default-rtdb.firebaseio.com",
  projectId: "appvamosconversar2",
  storageBucket: "appvamosconversar2.appspot.com",
  messagingSenderId: "686112871786",
  appId: "1:686112871786:web:593c961ff6455354944113"
};
  
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);

nome = localStorage.getItem("userName");
console.log("Nome do usuário: " + nome);
document.getElementById("name").innerHTML = "Bem vindo(a) " + nome;


function addRoom() {
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });
  
    localStorage.setItem("room_name", room_name);
      
    window.location = "vamos_conversar_page";
}

function getData() {
  firebase.database().ref("/"+room_name).on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key; childData = childSnapshot.val();
      if(childKey != "purpose") {
        roomNames = childKey;
        div = "<div onclick='redirectToRoomName(this.id)'>#" + roomNames + "<div><hr>";
        document.getElementById("output").innerHTML += div;
      }
    }
    );  
  }
  );
}

function redirectToRoomName(name) {
  localStorage.setItem("roomName", name);
  window.location = "vamos_conversar_page";
}

function logout() {
  window.location = "index.html";
}