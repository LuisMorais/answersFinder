import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";


export function isAuthenticated(callback, catchCallback) {
    const auth = getAuth()
    const db = getDatabase()

    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (callback) callback(user, db, auth)
        } else {
            if (catchCallback) catchCallback(user, db, auth)
        }

    })
}