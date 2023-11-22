
const formContainerSecond = document.querySelector("#form-create-container")


//form
const createAccountForm = document.createElement('form')

createAccountForm.classList.add('account-form')

formContainerSecond.append(createAccountForm)






// create icons and div for icons is created
const iconContainer2 = document.createElement('div')
iconContainer2.classList.add('icon-container1')
createAccountForm.append(iconContainer2)

// header
const heading1 = document.createElement('h1')
heading1.innerText = 'Create account'
iconContainer2.append(heading1);

const facebookIcon1 = document.createElement('img')
facebookIcon1.src = './facebook-fill 1.svg'
facebookIcon1.alt = 'facebook icon'
iconContainer2.append(facebookIcon1)

const twitterIcon1 = document.createElement('img')
twitterIcon1.src = './twitter-fill 1.svg'
twitterIcon1.alt = 'twitter icon'
iconContainer2.append(twitterIcon1)

const googleIcon1 = document.createElement('img')
googleIcon1.src = './google-fill 1.svg'
googleIcon1.alt = 'google icon'
iconContainer2.append(googleIcon1)

//paragraph

const paragraph1 = document.createElement('p')
paragraph1.innerText = 'Or login using email & password'
createAccountForm.append(paragraph1)

// br element

const hr1 = document.createElement('hr')
createAccountForm.append(hr1)

// full name
const fullNameLabel = document.createElement('label')
fullNameLabel.for = 'name'
fullNameLabel.innerText = 'Full Name'
createAccountForm.append(fullNameLabel)

const fullNameInput = document.createElement('input')
fullNameInput.name = "name"
fullNameInput.type = 'text'
fullNameInput.placeholder = 'John Rambo'
fullNameInput.id = 'name-field'
createAccountForm.append(fullNameInput)

//  label email

const emailLabel1 = document.createElement('label')
emailLabel1.for = 'email'
emailLabel1.innerText = 'Email Address'
createAccountForm.append(emailLabel1)

// input

const emailInput1 = document.createElement('input')
emailInput1.type = 'text'
emailInput1.name = 'email'
emailInput1.placeholder = 'hello@hey.com'
emailInput1.id = 'email-field1'
createAccountForm.append(emailInput1)

// label password

const passwordLabel1 = document.createElement('label')
passwordLabel1.for = 'password'
passwordLabel1.innerText = 'Create password'
createAccountForm.append(passwordLabel1)

//input

const passwordInput1 = document.createElement('input')
passwordInput1.id = 'password-field1'
passwordInput1.type = 'password', 'submit'
passwordInput1.name = 'passwordInput'
passwordInput1.placeholder = '..........'
createAccountForm.append(passwordInput1)

//confirm


const confirmPasswordLabel = document.createElement('label')
confirmPasswordLabel.for = 'password'
confirmPasswordLabel.innerText = 'Confirm password'
createAccountForm.append(confirmPasswordLabel)

//input

const confirmPasswordInput = document.createElement('input')
confirmPasswordInput.id = 'password-field2'
confirmPasswordInput.name = 'confirmInput'
confirmPasswordInput.type = 'password', 'submit'
confirmPasswordInput.placeholder = '..........'
createAccountForm.append(confirmPasswordInput)




// checkbox input
const divCheckbox1 = document.createElement('div')
divCheckbox1.classList.add('checkbox-container1')
createAccountForm.append(divCheckbox1)

const checkboxInput1 = document.createElement('input')
checkboxInput1.type = 'checkbox'

checkboxInput1.name = 'agree'//
checkboxInput1.id = 'agree'
divCheckbox1.append(checkboxInput1)



const checkBoxLabel1 = document.createElement('label')
checkBoxLabel1.setAttribute('for', 'agree')
checkBoxLabel1.classList.add('labelTerms')
checkBoxLabel1.innerHTML = '<a href="#">I agree to the Terms and Conditions</a>'
divCheckbox1.append(checkBoxLabel1)

// //login button

const registerButton = document.createElement('button')
registerButton.classList.add('register-button')
registerButton.type = 'submit'
registerButton.innerText = 'Register'
createAccountForm.append(registerButton)


//LS


let createFormData = {};
const LS1 = localStorage;

//get data from input

createAccountForm.addEventListener('input', function (e) {
    e.preventDefault();
    createFormData[e.target.name] = e.target.value;
    LS1.setItem('createFormData', JSON.stringify(createFormData));

});


registerButton.addEventListener('click', function (event) {
    emailInput1.value = ''

    passwordInput1.value = ''

    checkboxInput1.checked = false
    LS1.removeItem('createFormData');




})

if (LS1.getItem('createFormData')) {
    createFormData = JSON.parse(LS1.getItem('createFormData'));
    for (let key in createFormData) {
        createAccountForm.elements[key].value = createFormData[key];


        if (key === 'agree') {
            checkboxInput1.checked = createFormData[key];
        }
    }
   
}

        




