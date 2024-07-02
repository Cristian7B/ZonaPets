const linkItems = document.querySelectorAll(".link-item");
let linkSinDominio = (window.location.pathname).replace(/^\/|\/$/g, '');
let itemMod;

const urlUsuario = {
    mapa: ["mapaInd", 0],
    registrar: ["registrarInd", 1],
    iniciarsesion:["loginInd", 2]
};

const targetId = urlUsuario[linkSinDominio][0];
const indexElemento = urlUsuario[linkSinDominio][1]

if (targetId) {
    linkItems.forEach((item) => {
        if (item.id === targetId) {
            itemMod = item.id;
        }
    });
}

document.querySelector(".active").classList.remove("active");
document.getElementById(itemMod).classList.add("active");

const indicator = document.querySelector(".indicator");ñ

indicator.style.left = `${indexElemento * 95 + 48}px`;

document.querySelector('.menu-icon').addEventListener('click', () => {
    document.querySelector('.mobile-links-page').classList.toggle('active');
    document.querySelector('.menu-icon').classList.toggle('active');
});

