document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    document.getElementById("move-content").classList.toggle("move-container-all");
    document.getElementById("move-menu").classList.toggle("show-lateral");

    // Agregar código para ajustar la posición de logo-nombre durante el modo responsive
    var logoNombre = document.querySelector(".logo-nombre");
    logoNombre.classList.toggle("move-logo-responsive");
    var icono = document.querySelector("#icon-menu i");
    icono.classList.toggle("fa-bars");
    icono.classList.toggle("fa-times");
}
