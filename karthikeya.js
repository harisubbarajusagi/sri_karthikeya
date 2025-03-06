function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
 
let btn = document.getElementById('btn');

btn.addEventListener("click",()=>{
    window.scrollTo({top: 0, behavior: "smooth"});
})
