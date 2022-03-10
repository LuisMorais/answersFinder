import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { set, ref, getDatabase} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"
import { getSignupFields } from "./validateFields.js";

const auth = getAuth();


document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault()
  const fields = getSignupFields()
  const email = fields[0].value
  const password = fields[1].value
  const confirmPassword = fields[2].value
  const userName = fields[3].value
  if (password === confirmPassword) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const database = getDatabase()

        set(ref(database, 'users/' + user.uid), {
          userName,
          email,
          last_login: Date.now()
        });

        console.log(ref)
      
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }else{
    alert('Senhas não correspondem')
  }
})

