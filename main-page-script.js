main();

function main(){

    const logInButton = document.querySelector(".log-in-button");

    logInButton.addEventListener("click", logInButtonBox);


}

function logInButtonBox(){

    const logInButton = document.querySelector(".log-in-button");

    const pageBox = document.createElement("div");
    pageBox.classList.add("page-box");

    const removeLogInBoxIconDiv = document.createElement("button");
    removeLogInBoxIconDiv.classList.add("remove-log-in-box-icon-div");

    const removeLogInBoxIcon = document.createElement("button");
    removeLogInBoxIcon.classList.add("remove-log-in-box-icon");
    removeLogInBoxIcon.innerHTML="<ion-icon name=\'close\'></ion-icon>";

    const logInBox = document.createElement("div");
    logInBox.classList.add("log-in-box");

    const logInBoxHeading = document.createElement("h3");
    logInBoxHeading.classList.add("log-in-box-heading");
    logInBoxHeading.textContent="LOG IN BOX";

    const logInBoxInputContainer = document.createElement("div");
    logInBoxInputContainer.classList.add("log-in-box-input-container");

    const usernameInput = document.createElement("input");
    usernameInput.classList.add("log-in-box-input");
    usernameInput.placeholder="Email-id"
    usernameInput.name='email-id';
    usernameInput.type="text";

    const passwordInput = document.createElement("input");
    passwordInput.classList.add("log-in-box-input");
    passwordInput.placeholder="Password";
    passwordInput.name='password';
    passwordInput.type="Password";

    const rememberPasswordDiv = document.createElement("div");
    rememberPasswordDiv.classList.add("remember-password-div");

    const rememberCheckBox = document.createElement("input");
    rememberCheckBox.type="checkbox";
    rememberCheckBox.classList.add("remember-checkbox");

    const rememberCheckBoxText = document.createElement("div");
    rememberCheckBoxText.classList.add("remember-check-box-text");
    rememberCheckBoxText.textContent="Remember Me";

    const boxLogInButton = document.createElement("button");
    boxLogInButton.classList.add("box-log-in-button");
    boxLogInButton.innerHTML="Log In";

    removeLogInBoxIconDiv.appendChild(removeLogInBoxIcon);

    logInBox.appendChild(removeLogInBoxIconDiv);

    logInBoxInputContainer.appendChild(logInBoxHeading);

    logInBoxInputContainer.appendChild(usernameInput);

    logInBoxInputContainer.appendChild(passwordInput);

    logInBox.appendChild(logInBoxInputContainer);

    rememberPasswordDiv.appendChild(rememberCheckBox);

    rememberPasswordDiv.appendChild(rememberCheckBoxText);

    logInBox.appendChild(rememberPasswordDiv);

    logInBox.appendChild(boxLogInButton);

    document.body.appendChild(pageBox);

    document.body.appendChild(logInBox);

    removeLogInBoxIcon.addEventListener("click",removeLogInBox);


    logInButton.style.pointerEvents="auto";

    function removeLogInBox(){

        pageBox.style.opacity='1';

        pageBox.style.background='transparent';

        document.body.removeChild(pageBox);

        document.body.removeChild(logInBox);

        logInButton.style.pointerEvents="none";

    }

    boxLogInButton.addEventListener("click", checkValidation);


    const showError  = document.createElement("p");
    showError.classList.add("show-error");
    showError.innerHTML="";

    logInBox.appendChild(showError);

    function checkValidation(){

        if(usernameInput.value == "" && passwordInput.value == ""){
            usernameInput.style.border="1px solid red";
            passwordInput.style.border="1px solid red";
            showError.innerHTML="Please fill the details";
        }else if(usernameInput.value != "" && passwordInput.value != ""){
            showError.innerHTML="Please fill the details";
            boxLogInButton.addEventListener("click", removeLogInBox);
            boxLogInButton.addEventListener("click", showWalletIcon);
        }else{
            return;
        }

    }


    function showWalletIcon(){


        const walletIcon = document.createElement("button");
        walletIcon.innerHTML="<ion-icon name=\"wallet-outline\"></ion-icon>";
        walletIcon.classList.add("wallet-icon");

        document.body.appendChild(walletIcon);

        walletIcon.addEventListener("click",rewardBox);

        function rewardBox() {

            const removeWalletBoxIcon = document.createElement("button");
            removeWalletBoxIcon.classList.add("remove-wallet-icon");
            removeWalletBoxIcon.innerHTML = "<ion-icon name=\"close-outline\"></ion-icon>";

            const showRewardBox = document.createElement("div");
            showRewardBox.classList.add("show-reward-box");

            const amountBoxHeading = document.createElement("h2");
            amountBoxHeading.innerHTML = "Wallet";

            const amount = document.createElement("h3");
            amount.innerHTML = "$300";

            showRewardBox.appendChild(removeWalletBoxIcon);

            showRewardBox.appendChild(amountBoxHeading);

            showRewardBox.appendChild(amount);

            const RewardBoxHeading = document.createElement("h2");
            RewardBoxHeading.innerHTML = "Rewards";

            const Reward = document.createElement("h3");
            Reward.innerHTML = "30 Points";

            showRewardBox.appendChild(RewardBoxHeading);

            showRewardBox.appendChild(Reward);

            document.body.appendChild(showRewardBox);

            removeWalletBoxIcon.addEventListener("click", removeRewardBox)
            {

                function removeRewardBox() {

                    document.body.removeChild(showRewardBox);

                }
            }
        
        }

    }

}


