function generateColor() {
    const randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
    const colorBox = document.getElementById("color-box");
    colorBox.style.backgroundColor = randomColor;
    colorBox.textContent = randomColor;
}
