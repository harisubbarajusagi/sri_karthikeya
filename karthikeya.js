function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

   
    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById('btn');
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
