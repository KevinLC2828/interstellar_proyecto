const exploreBtn = document.getElementById("explore-btn");

exploreBtn.addEventListener("click", () => {

    // Scroll automático
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

});

exploreBtn.addEventListener("mouseover", () => {

    exploreBtn.textContent = "Viajando por el espacio...";

});

exploreBtn.addEventListener("mouseout", () => {

    exploreBtn.textContent = "Explorar Más";

});

window.addEventListener("load", () => {

    alert("Bienvenido al universo de Interstellar 🚀");

});

const form = document.getElementById("contact-form");

if(form){

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("form-message");

        if(name === "" || email === "" || message === ""){

            formMessage.textContent = "Por favor completa todos los campos.";

            formMessage.style.color = "red";

            return;
        }

        if(!email.includes("@")){

            formMessage.textContent = "Correo electrónico no válido.";

            formMessage.style.color = "red";

            return;
        }

        formMessage.textContent = "Mensaje enviado correctamente 🚀";

        formMessage.style.color = "#f5c542";

        form.reset();

    });

}
const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;
    }

    showSlide(currentSlide);

}

setInterval(nextSlide, 3000);