// Random JS for the Void Effect

var isEpilepsyModeOn = false;

function effectButton() {
    let voidButton = document.getElementById("void-button");
    let voidHTML = document.getElementById("htmlDX");
    let voidBODY = document.getElementById("bodyDX");
    let voidIMG1 = document.getElementById("imgDX1");
    let voidIMG2 = document.getElementById("imgDX2");
    if (isEpilepsyModeOn) {
        voidButton.innerHTML = "<span>Click to Enable</span><br><p class='tiny-text'>Don't click if Epileptic</p>";
        voidButton.classList.replace("button-on", "button-off");
        voidHTML.classList.remove("special-html");
        voidBODY.classList.remove("special-body");
        voidIMG1.classList.remove("void-img");
        voidIMG2.classList.remove("void-img");
    } else {
        voidButton.innerHTML = "<span>Click to Disable</span><br><p class='tiny-text'>Click if Epileptic</p>";
        voidButton.classList.replace("button-off", "button-on");
        voidHTML.classList.add("special-html");
        voidBODY.classList.add("special-body");
        voidIMG1.classList.add("void-img");
        voidIMG2.classList.add("void-img");
    }
    isEpilepsyModeOn = !isEpilepsyModeOn;
    console.log(isEpilepsyModeOn);
}