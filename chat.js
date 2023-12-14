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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    Armazene o nome de usuário em localStorage
    Programe window.location para que o usuário possa navegar até a página chat_room.html.
    */
   localStorage.setItem("userName", user_name);

   window.location = "chat_room.html";
}



