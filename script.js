document.addEventListener("DOMContentLoaded", () => {
    // Menu
    const menuToggle = document.getElementById("menuToggle");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownArrowUp = document.querySelector(".dropdown-arrow-up");
    
    if(menuToggle && dropdownMenu) {
        menuToggle.addEventListener("click", () => {
            dropdownMenu.classList.toggle("active");
        });
    }

    if(dropdownArrowUp && dropdownMenu) {
        dropdownArrowUp.addEventListener("click", () => {
            dropdownMenu.classList.remove("active");
        });
    }

    // Modal
    const modal = document.getElementById("modal");
    const btnAbrir = document.getElementById("abrirModal");
    const btnAbrir2 = document.getElementById("abrirModal2");
    const linkRellenar = document.getElementById("linkRellenar");
    const btnCerrar = document.getElementById("cerrarModal");

    const openModal = (e) => {
        if(e) e.preventDefault();
        if(modal) modal.style.display = "flex";
        if(dropdownMenu) dropdownMenu.classList.remove("active");
    };

    if(btnAbrir) btnAbrir.addEventListener("click", openModal);
    if(btnAbrir2) btnAbrir2.addEventListener("click", openModal);
    if(linkRellenar) linkRellenar.addEventListener("click", openModal);

    const closeModal = () => {
        if(modal) modal.style.display = "none";
    };

    if(btnCerrar) btnCerrar.addEventListener("click", closeModal);

    // Formulario y Modal Gracias
    const formulario = document.getElementById("formulario");
    const modalGracias = document.getElementById("modalGracias");
    const mensajeGracias = document.getElementById("mensajeGracias");
    const cerrarGracias = document.getElementById("cerrarGracias");

    if(formulario) {
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombreInput = document.getElementById("nombre");
            const nombre = nombreInput ? nombreInput.value : "";
            if(mensajeGracias) {
                mensajeGracias.textContent = `Gracias ${nombre}!`;
            }
            closeModal();
            if(modalGracias) modalGracias.style.display = "flex";
            formulario.reset();
        });
    }

    if(cerrarGracias) {
        cerrarGracias.addEventListener("click", () => {
            if(modalGracias) modalGracias.style.display = "none";
        });
    }

    // Cerrar modals al hacer click afuera
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
        if (e.target === modalGracias) {
            modalGracias.style.display = "none";
        }
    });
});
