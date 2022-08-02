let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

let cursor = document.querySelector('.cursor');
let cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove',function(e){
    cursor.style.cssText = cursor2.style.cssText = 'left: '+ e.clientX + 'px; top: ' + e.clientY + 'px;';
});