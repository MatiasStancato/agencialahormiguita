// JavaScript
const contactForm = document.getElementById("contactForm");
const confirmationContainer = document.getElementById("confirmationContainer");

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // ... (código para enviar el formulario)

    // Mostrar el mensaje de confirmación
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerText = "Tu consulta fue enviada correctamente. Muy pronto nos pondremos en contacto.";
    confirmationContainer.style.display = "block";

    // Ocultar el contenedor con animación
    confirmationContainer.style.animation = "fadeOut 1s ease"; // Aplicar la animación
    setTimeout(() => {
        confirmationContainer.style.display = "none"; // Ocultar el contenedor después de 1 segundo
    }, 1000);
});

