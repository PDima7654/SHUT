// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js'
import {createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js'
import {signInWithEmailAndPassword, signIn, signOut, signUp} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js'
import { } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-storage.js'

const firebaseConfig = {
    apiKey: "AIzaSyDu4lUTv1_hkdRKEqawWDoezCt2nGG3V5c",
    authDomain: "proket-8a2cf.firebaseapp.com",
    projectId: "proket-8a2cf",
    storageBucket: "proket-8a2cf.appspot.com",
    messagingSenderId: "958662258382",
    appId: "1:958662258382:web:597492128e2636073baa9f",
    measurementId: "G-2HR32WC638"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");
      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));
      location.href = "information.html";
      alert("Signed Up");
      
  } 

  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    location.href = "information.html";
    alert("Logged In : "+ email.value);
    
  }

  function signOut(){
      auth.signOut();
      location.href = "index.html";
      alert("Signed Out");
  }

 

  auth.onAuthStateChanged(function(user){
      if(user){
          var email = user.email;
          alert("Logged in as: " + email);

      }else{
          alert("No active user");
      }
    })
  
    


