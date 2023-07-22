const showNavBar = document.querySelector(".show-nav-bar");

showNavBar.addEventListener("click",NavBar,true);

function NavBar(){

    const navBarUl = document.querySelector(".nav-bar-ul");

    const removeNavBarBoxIcon = document.createElement("button");
    removeNavBarBoxIcon.classList.add("remove-nav-bar-box-icon");
    removeNavBarBoxIcon.innerHTML="<ion-icon name=\'close\'></ion-icon>";

    const navBarBox = document.createElement("div");
    navBarBox.classList.add("nav-bar");

    const navBarBoxHeading = document.createElement("h2");
    navBarBoxHeading.classList.add("nav-bar-box-heading");
    navBarBoxHeading.textContent="Nav Bar";
    navBarBoxHeading.style.textAlign='center';

    navBarBox.appendChild(removeNavBarBoxIcon);

    navBarBox.appendChild(navBarUl);

    navBarBox.appendChild(navBarBoxHeading);

    document.body.appendChild(navBarBox);

    removeNavBarBoxIcon.addEventListener("click",removeNavBar,true);

    function removeNavBar(){
        document.body.removeChild(navBarBox);

    }
}
