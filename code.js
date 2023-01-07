const openmenu = document.getElementById("menu-open")
const closemenu = document.getElementById("menu-close")
const navbar = document.querySelector("nav")

openmenu.addEventListener("click", () =>{
    navbar.classList.add("navin");
})
closemenu.addEventListener("click", () =>{
    navbar.classList.remove("navin");
})