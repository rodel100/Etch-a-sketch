let art = document.querySelector(".container")
let x = 12;
let buttonreset = document.querySelector('.reset');
let buttonrainbow = document.querySelector(".rainbow");

function makeDiv(x){
    for(let i = 0; i < (x**2); i++){
        let grid = document.createElement('div')
        grid.classList.add("grid")
        grid.innerHTML = "";
        art.appendChild(grid);}
    art.style.gridTemplateColumns = "repeat("+x+", 1fr)";}
    function clear(){
        let grids = document.querySelectorAll('div');
        grids.forEach(div => {
            div.classList.remove("grid")
            div.remove();
            })
        let userinput = prompt('Enter a number');
        intialize(userinput)}

function colorenter(color){
    let grids = document.querySelectorAll('div');
    grids.forEach((div => {
    div.addEventListener("mouseenter", (e) => {
    div.style.backgroundColor = color
    })}))};
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function randomcolor(){
    let grids = document.querySelectorAll('div');
    grids.forEach((div => {
    div.addEventListener("mouseenter", (e) => {
    div.style.backgroundColor = getRandomColor()
    })}))};

function colorblack() {
 colorenter("black");}
function intialize(x){
makeDiv(x);
colorenter("black");
buttonrainbow.addEventListener("click", randomcolor);
buttonreset.addEventListener("click", clear);
}
intialize(x);