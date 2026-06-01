const modal = document.getElementById("modal");
const modalGracias = document.getElementById("modalGracias");

const abrirModal = document.getElementById("abrirModal");
const abrirModal2 = document.getElementById("abrirModal2");

const cerrarModal = document.getElementById("cerrarModal");
const cerrarGracias = document.getElementById("cerrarGracias");

const formulario = document.getElementById("formulario");

const mensajeGracias = document.getElementById("mensajeGracias");

abrirModal.addEventListener("click", () => {

    modal.style.display = "flex";

});

abrirModal2.addEventListener("click", () => {

    modal.style.display = "flex";

});


cerrarModal.addEventListener("click", () => {

    modal.style.display = "none";

});


formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    mensajeGracias.innerHTML = `Gracias "${nombre}"!`;
    modal.style.display = "none";
    modalGracias.style.display = "flex";

});

cerrarGracias.addEventListener("click", () => {

    modalGracias.style.display = "none";

    formulario.reset();

});

const menuToggle = document.getElementById("menuToggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownLinks = dropdownMenu.querySelectorAll("a");
const dropdownArrowUp = dropdownMenu.querySelector(".dropdown-arrow-up");
const linkRellenar = document.getElementById("linkRellenar");

menuToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("active");
});

dropdownLinks.forEach(link => {
    link.addEventListener("click", () => {
        dropdownMenu.classList.remove("active");
    });
});

if (dropdownArrowUp) {
    dropdownArrowUp.addEventListener("click", () => {
        dropdownMenu.classList.remove("active");
    });
}

linkRellenar.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});
