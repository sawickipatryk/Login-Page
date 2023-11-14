const container = document.querySelector('.container')
const buttonSignUp = document.querySelector('.toggle-panel__sign-up-button')
const buttonSignIn = document.querySelector('.toggle-panel__sign-in-button')

const buttonLogIn = document.querySelector('.form__button-login-in')
const buttonCreateAccount = document.querySelector('.form__create-acount-button')

buttonSignUp.addEventListener('click', () => {

    container.classList.add('active')

})
buttonSignIn.addEventListener('click', () => {

    container.classList.remove('active')

})
buttonLogIn.addEventListener('click', (e) => {
    e.preventDefault()
    container.classList.remove('active')

})
buttonCreateAccount.addEventListener('click', (e) => {
    e.preventDefault()
    container.classList.add('active')

})