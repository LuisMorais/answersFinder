import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
import { ref, getDatabase, onValue } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js"
import {isAuthenticated} from './functions.js'

document.body.onload = () => {
    isAuthenticated(setUsername)
}

function setUsername(user, db) {
    removeAuthLinks()
    const uid = user.uid
    return onValue(ref(db, '/users/' + uid), (snapshot) => {
        const username = (snapshot.val() && snapshot.val().userName) || 'Anonymous'
        setProfileLink(username)
    }, {
        onlyOnce: true
    })
}

function removeAuthLinks() {
    const authLink = document.querySelector('#auth-link')
    authLink.remove()
}

function setProfileLink(username) {
    const profileDiv = document.createElement('div')
    profileDiv.classList.add('username')
    const icon = document.createElement('i')
    icon.classList.add('fa', 'fa-user')
    icon.setAttribute('aria-hidden', true)
    const name = document.createElement('span')
    name.innerText = username

    const userMenu = document.createElement('nav')
    userMenu.classList.add('usermenu')

    const profileLink = document.createElement('a')
    profileLink.setAttribute('href', '#') //mudar depois
    profileLink.innerText = 'Perfil'

    const logout = document.createElement('div')
    logout.innerText = 'Sair'
    setLogout(logout)

    userMenu.append(profileLink, logout)

    profileDiv.append(icon, name, userMenu)

    setDropdownEvents(profileDiv, userMenu)

    document.querySelector('#header').append(profileDiv)
}

function setLogout(elem) {
    const auth = getAuth();

    elem.addEventListener('click', () => {
        signOut(auth).then(() => {
            location.href = 'http://127.0.0.1:5500'
        }).catch((error) => {
            // An error happened.
        });
    })
}

function setDropdownEvents(parent, child) {
    const show = () => {
        child.style.display = 'block'
    }

    const hide = () => {
        child.style.display = 'none'
    }

    const toggle = () => {
        child.style.display = child.style.display === 'block' ? 'none' : 'block'
    }

    parent.addEventListener('mouseover', show)
    parent.addEventListener('click', toggle)
    parent.addEventListener('mouseleave', hide)
}