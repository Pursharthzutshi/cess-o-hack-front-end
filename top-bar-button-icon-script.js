const topBarButtonIcon = document.createElement("button");
topBarButtonIcon.classList.add("top-bar-button-icon");
topBarButtonIcon.innerHTML = "<ion-icon name=\"arrow-up-outline\"></ion-icon>";

document.body.appendChild(topBarButtonIcon);

topBarButtonIcon.addEventListener("click", topPage);

function topPage() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

window.addEventListener("scroll", function () {

    const serviceSection = document.querySelector(".service-section");

    if (serviceSection.getBoundingClientRect().top < window.innerHeight) {
        topBarButtonIcon.style.visibility = 'visible';
    } else if (serviceSection.getBoundingClientRect().top < window.innerHeight) {
        topBarButtonIcon.style.visibility = 'hidden';
    } else {
        return;
    }
});