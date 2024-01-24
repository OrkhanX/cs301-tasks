const form =document.querySelector('.myForm')
const username = document.querySelector('#username')
const email =document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword =document.querySelector('#confirmPassword')
const isAdmin = document.querySelector('#isAdmin')
const submitBtn = document.querySelector('#btnSubmit')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        name: username.value,
        email: email.value,
        password: password.value,
        confirmPassword: password.value,
    }
    if (password.value !== confirmPassword.value){
        alert('Confirm password is not match Password!')
        return
    } else if (isAdmin.checked) {
        window.location = 'user.html'
    } else {
        console.log('user' , user);
    }
})

function removeDisabled(anyInput){
    anyInput.addEventListener('change', () => {
        if (username.value && email.value && password.value && confirmPassword.value) {
            submitBtn.removeAttribute('disabled')
        } else {
            submitBtn.setAttribute('disabled', true)
        }
    })
}
removeDisabled