document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.mobile-links-page').classList.toggle('active');
    document.querySelector('.menu-icon').classList.toggle('active');
});


function cambiarTexto() {
    let h1 = document.getElementById("textoH1")
    let p = document.getElementById("textoP")
    let imagen = document.getElementById("imgInfo2")
    let imagenPrincipal = document.getElementById("imgAcercaDe")

    if (window.innerWidth <= 500) {
        h1.textContent = "Disfruta de momentos inolvidables";
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";
        imagenPrincipal.src = "/static/imagenes/pixelcut-export.png/";
    }     
    else {
        h1.textContent = "Creando momentos inolvidables con tu mascota";
        imagenPrincipal.src = "/static/imagenes/acercade.png/"
    }
            
    
    if (window.innerWidth <= 1050) {
        imagen.src = "/static/imagenes/image 3r.png";
        imagenPrincipal.src = "/static/imagenes/pixelcut-export.png/";
    } 
    else {
        imagen.src = "/static/imagenes/info-dog.png";
        imagenPrincipal.src = "/static/imagenes/acercade.png/"
    }    
}

document.addEventListener('DOMContentLoaded', function() {

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        centeredSlides: true,
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        slidesPerView: 1,
        spaceBetween: 0,

        autoplay: {
            delay: 3000, 
            disableOnInteraction: false, 
        },

        speed: 600,
    });

});

window.addEventListener("resize", cambiarTexto);
cambiarTexto();