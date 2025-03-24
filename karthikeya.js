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

// call and message 
function makeCall() {
    const companyPhoneNumber = "+1234567890"; // Replace with actual company number
    window.location.href = `tel:${companyPhoneNumber}`;
}

function sendEmail() {
    const companyEmail = "company@example.com"; // Replace with actual company email
    const subject = encodeURIComponent("Inquiry from Website");
    const body = encodeURIComponent("Hello, I would like to inquire about...");
    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
}

// Add event listeners to buttons
document.getElementById("callButton").addEventListener("click", makeCall);
document.getElementById("emailButton").addEventListener("click", sendEmail);
