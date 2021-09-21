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
    const ifActive = document.getElementById("improve-website-div");
    const newWebsite = document.getElementById("question-5-1");
    const oldWebsite = document.getElementById("question-5-2");


    if (oldWebsite.checked) {
        ifActive.style.display = "block";
    } else if (newWebsite.checked) {
        ifActive.style.display = "none";
    }
}

function existingUrl() {
    const urlDisplay = document.getElementById("url-display");
    const no = document.getElementById("question-6-1");
    const yes = document.getElementById("question-6-2");

    if (no.checked) {
        urlDisplay.style.display = "none";
    } else if (yes.checked) {
        urlDisplay.style.display = "block";
    }
}

function otherDisplay() {
    const other = document.getElementById("question-7-4");
    const otherInput = document.getElementById("other-input");
    const classThing = document.getElementsByClassName("if-checked");

    if (other.checked) {
        otherInput.style.display = "block";
    } else {
        otherInput.style.display = "none";
    }
}

function platformDisplay() {
    const other = document.getElementById("question-9-5");

    if (other.checked) {
        document.getElementById("platform-input").style.display = "block";
    } else {
        document.getElementById("platform-input").style.display = "none";
    }
}


function keywordDisplay() {
    const yes = document.getElementById("question-11-1");

    if (yes.checked) {
        document.getElementById("keyword-input").style.display = "block";
    } else {
        document.getElementById("keyword-input").style.display = "none";
    }
}



