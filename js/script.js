const colorBtn = document.querySelector(".colorBtn");
const bodyBcg = document.querySelector('body');
const colors = ['yellow', 'green', 'red', 'blue', 'teal'];


colorBtn.addEventListener('click', changeColor);

function changeColor() {
    let random = Math.floor(Math.random() * colors.length);
    bodyBcg.style.backgroundColor = colors[random];
}

changColor();