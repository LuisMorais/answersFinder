import { getAuth, createUserWithEmailAndPassword, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { set, ref, getDatabase } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"
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
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            const database = getDatabase()

            set(ref(database, 'users/' + user.uid), {
              userName,
              email,
              last_login: Date.now()
            });

            location.href = 'http://127.0.0.1:5500'


          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
      });
  } else {
    alert('Senhas não correspondem')
  }
})

