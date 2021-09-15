// const deviceType = () => {
//     const ua = navigator.userAgent;

//     if (/tablet|ipad|playbook|silk|(android(?!.*mobi))/i.test(ua)) {
//         return "tablet";
//     }

//     else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
//         return "mobile";
//     }
//     return "desktop";
// };

// window.alert(window.innerHeight);

function setWindowHeight() {
    document.documentElement.style.setProperty('--window-height', window.innerHeight.toString() + "px");
}

setWindowHeight();

// //  window.addEventListener('resize', setWindowHeight());

//  window.onresize = setWindowHeight();

// window.alert(getComputedStyle(document.documentElement).getPropertyValue('--window-height').toString());

// if (deviceType() === "desktop") {
//     // add a class to the forest-trees
// }