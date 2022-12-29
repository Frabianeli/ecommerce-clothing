 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 
 import { getAuth, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

 const firebaseConfig = {
   apiKey: "AIzaSyAXLiHGR02CtLcNX00O99yTThKvaFuU82M",
   authDomain: "ecommerce-react-c05d7.firebaseapp.com",
   projectId: "ecommerce-react-c05d7",
   storageBucket: "ecommerce-react-c05d7.appspot.com",
   messagingSenderId: "506533743807",
   appId: "1:506533743807:web:e6ba6bf0be78f38e37ca0a",
   measurementId: "G-YBSXMNS243"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app)


 const provider = new FacebookAuthProvider()

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    console.log(result)
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
