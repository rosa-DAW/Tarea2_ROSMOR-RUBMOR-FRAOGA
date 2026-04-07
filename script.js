document.addEventListener("DOMContentLoaded", () => {
  const enlaces = document.querySelectorAll(".nav a");
  const rutaActual = window.location.pathname.split("/").pop();

  enlaces.forEach(enlace => {
    const rutaEnlace = enlace.getAttribute("href");
    if (rutaEnlace === rutaActual || (rutaActual === "" && rutaEnlace === "index.html")) {
      enlace.classList.add("activo");
    }
  });

  const formulario = document.getElementById("formulario-contacto");
  const mensajeFormulario = document.getElementById("mensaje-formulario");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      mensajeFormulario.textContent = "Formulario enviado correctamente.";
      formulario.reset();
    });
  }
});