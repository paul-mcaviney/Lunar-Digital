// Code for setting the inner screen size to avoid bottom navigation bar covering content on mobile
function setWindowHeight() {
    document.documentElement.style.setProperty('--window-height', window.innerHeight.toString() + "px");
}

setWindowHeight();

// Code for toggling options on client-questionnaire.html
// const ifActive = document.querySelector(".if-active");
// const newWebsite = document.getElementById("question-5-1");
// const oldWebsite = document.getElementById("question-5-2");

function oldNewCheck() {
    const ifActive = document.getElementById("if-checked");
    const newWebsite = document.getElementById("question-5-1");
    const oldWebsite = document.getElementById("question-5-2");


    if (oldWebsite.checked) {
        ifActive.style.display = "block";
        ifActive.style.transition = "0.4s";
    } else if (newWebsite.checked) {
        ifActive.style.display = "none";
    }
}



