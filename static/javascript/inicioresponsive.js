document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.getElementById("move-content").classList.toggle("move-container-all")
    document.getElementById("move-menu").classList.toggle("show-lateral")
}