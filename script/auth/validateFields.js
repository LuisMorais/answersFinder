window.addEventListener('load', () => {
    const isEmpty = [true, true, true, true]
    let isEqual = true
    const button = document.querySelector('#button')

    const fields = location.pathname.includes('login') ? getLoginFields() : getSignupFields()


    fields.forEach((element, i) => {
        element.addEventListener('input', (event) => {
            if (event.target.value.length > 0) isEmpty[i] = false
            else isEmpty[i] = true
            const isArrayTrue = verifyIsEmpty(isEmpty, fields)
            if (isArrayTrue) {
                button.disabled = true
            } else if(isEqual) {
                button.disabled = false
            }else{
                button.disabled = true
            }
        })
    })
})

function verifyIsEmpty(isEmpty, fields) {
    return fields.reduce((previous, current, i) => {
        if (previous) return true
        if (!isEmpty[i]) return false
        return true
    }, false)
}

function getLoginFields() {
    const email = document.querySelector('#username')
    const password = document.querySelector('#password')
    return [email, password]
}

function getSignupFields() {
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirm-password')
    const username = document.querySelector('#username')
    return [email, password, confirmPassword, username]
}