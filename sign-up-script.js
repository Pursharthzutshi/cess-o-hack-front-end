
const usernameInput = document.querySelector(".username-input");
const phoneNoInput = document.querySelector(".phone-no-input");
const firstNameInput = document.querySelector(".first-name-input");
const lastNameInput = document.querySelector(".last-name-input");
const passwordInput = document.querySelector(".password-input");
const passwordReCheckInput = document.querySelector(".password-re-check-input");
const emailIdInput = document.querySelector(".email-id-input");

const signUpButton = document.querySelector(".sign-up-button");


signUpButton.addEventListener("click",username);
signUpButton.addEventListener("click",phoneNo);
signUpButton.addEventListener("click",password);
signUpButton.addEventListener("click",firstName);
signUpButton.addEventListener("click",lastName);
signUpButton.addEventListener("click",passwordReCheck);
signUpButton.addEventListener("click",emailId);

const showError = document.createElement("p");
showError.classList.add("show-error");

document.body.appendChild(showError);



function username(){

    const usernameInputError = document.querySelector(".show-error");

    if(usernameInput.value == ""){
        usernameInput.style.border='2px solid red';
        usernameInputError.innerHTML="Please Fill You username";
        showError.style.color="red";
    }else{
        return;
    }
}


function phoneNo(){

    const phoneNoInputError = document.querySelector(".show-error");

    if(phoneNoInput.value == ""){
        phoneNoInput.style.border='2px solid red';
        phoneNoInputError.innerHTML="Please Fill Your Phone No";
        showError.style.color="red";
    }else{
        return;
    }
}


function password(){

    const passwordInputError = document.querySelector(".show-error");

    if(passwordInput.value == ""){
        passwordInputError.innerHTML="Please Fill Your Password";
        passwordInput.style.border='2px solid red';
        showError.style.color="red";
    }else if(passwordInput.value.length < 5 || passwordInput.value.length > 30){
        passwordInputError.innerHTML="Password should be between 5 to 30";
        showError.style.color="red";
    }else{
        return;
    }
}

function firstName(){

    const firstNameInputError = document.querySelector(".show-error");

    if(firstNameInput.value == ""){
        firstNameInputError.innerHTML="Please Fill Your First Name";
        firstNameInput.style.border='2px solid red';
        firstNameInputError.style.color="red";
    }else{
        return;
    }

}


function lastName(){

    const lastNameInputError = document.querySelector(".show-error");

    if(lastNameInput.value == ""){
        lastNameInputError.innerHTML="Please Fill Your Last Name";
        lastNameInput.style.border='2px solid red';
        lastNameInputError.style.color="red";
    }else{
        return;
    }

}


function passwordReCheck(){


    const passwordInput = document.querySelector(".password-input");

    const passwordReCheckInputError = document.querySelector(".password-re-check-input");

    if( passwordInput.value == passwordReCheckInput.value ){
        passwordReCheckInputError.innerHTML="Password is not same";
        passwordReCheckInput.style.border='2px solid red';
        passwordReCheckInputError.style.color="red";
    }else{
        return;
    }

}

function emailId(){

    const emailIdInputError = document.querySelector(".show-error");

    if( emailIdInput.value == "" ){
        emailIdInput.innerHTML="Please Fill your email id";
        emailIdInput.style.border='2px solid red';
        emailIdInputError.style.color="red";
    }else{
        return;
    }


}