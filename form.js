
const formContainer = document.querySelector('#form-container')


//form
const loginForm = document.createElement('form')
loginForm.classList.add('login-form')
formContainer.append(loginForm)



// create icons and div for icons is created
const iconContainer = document.createElement('div')
iconContainer.classList.add('icon-container')
loginForm.append(iconContainer)

// header
const heading = document.createElement('h1')
heading.innerText = 'Login account'
iconContainer.append(heading);

const facebookIcon = document.createElement('img')
facebookIcon.src = './facebook-fill 1.svg'
facebookIcon.alt = 'facebook icon'
iconContainer.append(facebookIcon)

const twitterIcon = document.createElement('img')
twitterIcon.src = './twitter-fill 1.svg'
twitterIcon.alt = 'twitter icon'
iconContainer.append(twitterIcon)

const googleIcon = document.createElement('img')
googleIcon.src = './google-fill 1.svg'
googleIcon.alt = 'google icon'
iconContainer.append(googleIcon)

//paragraph

const paragraph = document.createElement('p')
paragraph.innerText = 'Or login using email & password'
loginForm.append(paragraph)

// br element

const hr = document.createElement('hr')
hr.classList.add('hr')
loginForm.append(hr)

// create label email

const emailLabel = document.createElement('label')
emailLabel.for = 'email'
emailLabel.innerText = 'Email Address'
loginForm.append(emailLabel)

//create input

const emailInput = document.createElement('input')
emailInput.type = 'text'
emailInput.name = 'email'
emailInput.placeholder = 'hello@hey.com'
emailInput.id = 'email-field'
loginForm.append(emailInput)

// create label password

const passwordLabel = document.createElement('label')

passwordLabel.for = 'password'
passwordLabel.innerText = 'Password'
loginForm.append(passwordLabel)

//create input

const passwordInput = document.createElement('input')
passwordInput.id = 'password-field'
passwordInput.name = 'password'
passwordInput.type = 'password', 'submit'
passwordInput.placeholder = '..........'
loginForm.append(passwordInput)





// create checkbox input
const divCheckbox = document.createElement('div')
divCheckbox.classList.add('checkbox-container')
loginForm.append(divCheckbox)

const checkboxInput = document.createElement('input')
checkboxInput.type = 'checkbox'
checkboxInput.name = 'remember'
checkboxInput.id ='remember-me'
divCheckbox.append(checkboxInput)
const checkboxSpan = document.createElement('span')
checkboxSpan.innerText = 'Remember me'
divCheckbox.append(checkboxSpan)




//forgot password

const forgotPassword = document.createElement('a')
forgotPassword.classList.add('forgot-password')
forgotPassword.innerText = 'Forgot password?'
divCheckbox.append(forgotPassword)

//login button

const loginButton = document.createElement('button')
loginButton.classList.add('login-button')
loginButton.type ='submit'
loginButton.innerText = 'Login'
loginForm.append(loginButton)



//сохранение данных в localStorage

let formData = {};
const LS = localStorage;



loginForm.addEventListener('input', function (event) {
    event.preventDefault();
    formData[event.target.name] = event.target.value;
    LS.setItem('formData', JSON.stringify(formData));

});

//restore data
loginButton.addEventListener('click', function (event) {

    emailInput.value = ''
    passwordInput.value = ''
    checkboxInput.checked = false
    LS.removeItem('formData');


})  

if (LS.getItem('formData')) {
    formData = JSON.parse(LS.getItem('formData'));

    for (let key in formData) {
        loginForm.elements[key].value = formData[key];
        if (key === 'remember') {
            checkboxInput.checked = formData[key];
        }
    }
}


    
    
         




