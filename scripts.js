// Code for setting the inner screen size to avoid bottom navigation bar covering content on mobile
function setWindowHeight() {
    document.documentElement.style.setProperty('--window-height', window.innerHeight.toString() + "px");
}

setWindowHeight();

// TODO: make all these functions into one if possible

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

function pageTypeDisplay() {
    const other = document.getElementById("question-13-6");

    if (other.checked) {
        document.getElementById("page-input").style.display = "block";
    } else {
        document.getElementById("page-input").style.display = "none";
    }
}

function featureDisplay() {
    const other = document.getElementById("question-14-6");

    if (other.checked) {
        document.getElementById("feature-input").style.display = "block";
    } else {
        document.getElementById("feature-input").style.display = "none";
    }
}


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// TODO: set initial size of textarea (https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize)

// For auto resizing textareas
window.onload = function test() {
    const tx = document.getElementsByTagName("textarea");

    for (let i =0; i < tx.length; i++) {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        tx[i].addEventListener("input", OnInput, false);
    }
}

function OnInput() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
}

