document.getElementById("faq-content").addEventListener("click", function() {
    
    var desplegable = document.getElementById("faq-preguntas");
    var icono = document.getElementById("icon-desplegable");

    if (icono.style.transform === "rotate(180deg)") {
        icono.style.transform = "rotate(0deg)"
    }
    else {
        icono.style.transform = "rotate(180deg)"
    }
    desplegable.classList.toggle("show");

    
})

function cambiarTexto() {
    var title = document.getElementById("titlePregunta");
    
    if (window.innerWidth <= 624) {
        title.textContent = "¿Otra pregunta?"
    }
    else {
        title.textContent = "¿Tienes otra pregunta?"
    }
}


window.addEventListener("resize", cambiarTexto);
cambiarTexto();