import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

document.body.onload = () => {
    const user = getAuth()
    console.log(user)
    if(user.currentUser){
        document.querySelector('#auth-link').remove()
    }

}