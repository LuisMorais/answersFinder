import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { update, ref, getDatabase } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"
import { getLoginFields } from "./validateFields.js";

const auth = getAuth();

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    const fields = getLoginFields()
    const email = fields[0].value
    const password = fields[1].value
    setPersistence(auth, browserSessionPersistence)
        .then(() => {
            return signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;

                    const database = getDatabase()

                    update(ref(database, 'users/' + user.uid), {
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
})
