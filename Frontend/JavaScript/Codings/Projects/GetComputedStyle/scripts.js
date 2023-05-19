var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

const center = document.querySelector(".center");

const getBGMcolor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}

console.log(getBGMcolor(pink));