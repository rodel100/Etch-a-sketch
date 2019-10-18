let art = document.querySelector(".container")
let i = 0
let x = 257
function makediv(x){
for(i; i < x; i++){
    let grid = document.createElement("div")    
    grid.classList.add("grid")
    grid.textContent = "";
    art.appendChild(grid)
}}
let reset = document.querySelector('.reset')
let grids = document.querySelectorAll('div');
grids.forEach((div => {
    div.addEventListener("mouseenter", (e) => {
    div.classList.add("colorchange");
    });
}))
    reset.addEventListener("click", (e) => {
    grids.forEach((div => {
    div.classList.remove('colorchange');
    }))
    x = prompt("number of pixels needed (Results will be Number x Number")
    })
    makediv(x);