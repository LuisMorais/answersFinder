window.addEventListener('load', () => {
    let emailIsEmpty = true
    let passwordIsEmpty = true
    const button = document.querySelector('#button')

    const email = document.querySelector('#username')
    const password = document.querySelector('#password')

    email.addEventListener('input', (event) => {
        if(event.target.value.length > 0) emailIsEmpty = false
        else emailIsEmpty = true
        verifyIsEmpty(button, emailIsEmpty, passwordIsEmpty)
    })

    password.addEventListener('input', (event) => {
        if(event.target.value.length > 0) passwordIsEmpty = false
        else passwordIsEmpty = true
        verifyIsEmpty(button, emailIsEmpty, passwordIsEmpty)
    })
})

function verifyIsEmpty(button, emailIsEmpty, passwordIsEmpty){
    if(!emailIsEmpty &&! passwordIsEmpty){
        button.disabled = false
    }else{
        button.disabled = true
    }
}