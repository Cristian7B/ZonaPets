document.addEventListener('DOMContentLoaded', function() {
    const iconMenu = document.getElementById('icon-menu');
    const links = document.querySelector('.links');

    iconMenu.addEventListener('click', function() {
        links.classList.toggle('show');
    });
});
