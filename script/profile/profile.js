import { ref, orderByChild, query, equalTo, onValue } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";
import { isAuthenticated } from '../functions.js'

document.body.onload = () => {

  const urlParams = new URLSearchParams(location.search)

  if (!urlParams.has('name')) return location.href = 'http://127.0.0.1:5500'

  const setUserProfileInfo = (user, db) => {
    const nameRef = query(ref(db, 'users'), orderByChild('userName'), equalTo(urlParams.get('name')))

    onValue(nameRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key
        const childData = childSnapshot.val()
        if(user){
          setProfileInfo(childData)
        }else{
          setProfileInfo(childData)
          removePrivateInfo()
        }
      })
    }, {
      onlyOnce: true
    })
  }



  isAuthenticated(setUserProfileInfo, setUserProfileInfo)
}

function setProfileInfo({ userName, topics, posts, stars, email }) {
  document.querySelector('#username-title').innerText = userName
  document.querySelector('#topics').innerText = topics + ' Perguntas'
  document.querySelector('#posts').innerText = posts + ' Respostas'
  document.querySelector('#stars').innerText = stars + ' Estrelas'
  if (email) {
    document.querySelector('#username').innerText = 'Nome de usuário: ' + username
    document.querySelector('#email').innerText = 'Email: ' +  email
  }
}

function removePrivateInfo() {
  document.querySelector('#btn-alter').remove()
  document.querySelector('#password').remove()
  document.querySelector('#username').remove()
  document.querySelector('#email').remove()
}