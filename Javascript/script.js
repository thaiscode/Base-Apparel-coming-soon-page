let email = document.querySelector('#form__email')
let button = document.querySelector('.form__button')
let val = document.querySelector('.form__val')
let errorIcon = document.querySelector('.form__error')


button.addEventListener('click', validation)

function validation() {
    if ((email.value == '') || ((email.value).search("@") == -1)){
        email.style.border = '2px solid hsl(0, 93%, 68%)'
        errorIcon.style.display = 'inherit' 
        val.innerHTML = '<p>Please provide a valid email</p>'
    }     
}

