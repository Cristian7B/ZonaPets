document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById('app');
    let currentUser = false;
    let registrationToggle = false;
    let userEmail = "";
    let username = "";

    function checkUserStatus() {
        axios.get("https://zonapets.vercel.app/api/get_user_info/", { withCredentials: true })
            .then(function (response) {
                currentUser = true;
                renderApp(response.data);  // Pasar los datos del usuario a renderApp
            })
            .catch(function (error) {
                currentUser = false;
                renderApp();
            });
    }

    function updateFormBtn() {
        registrationToggle = !registrationToggle;
        renderApp();
    }

    // authentication.js

    function submitRegistration(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const data = {
            email: email,
            username: username,
            password: password,
        };

        axios.post("https://zonapets.vercel.app/api/register/", data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(function (response) {
                return axios.post("https://zonapets.vercel.app/api/login/", { email, password }, { withCredentials: true });
            })
            .then(function (response) {
                currentUser = true;
                renderApp();
            })
            .catch(function (error) {
                if (error.response && error.response.data && error.response.data.error_message) {
                    // Manejar el mensaje de error específico
                    const errorMessage = error.response.data.error_message;
                    alert(errorMessage);
                } else {
                    // Handle other errors
                    console.error(error);
                }
            });
    }


    function submitLogin(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        axios.post("https://zonapets.vercel.app/api/login/", { email, password }, { withCredentials: true })
            .then(function (response) {
                currentUser = true;

                window.location.href = "https://zonapets.vercel.app/";
                renderApp();
            });
    }

    function submitLogout(e) {
        e.preventDefault();
        axios.post("https://zonapets.vercel.app/api/logout/", {}, { withCredentials: true })
            .then(function (response) {
                currentUser = false;
                window.location.href = "https://zonapets.vercel.app/"
            });
    }

    function renderApp(userData) {
        // Renderizar el resto de la aplicación como lo haces actualmente
        // Asegúrate de tener un contenedor en tu HTML para cada pieza de información del usuario
        const app = document.getElementById('app');
        app.innerHTML = '';
        let infocontent = '';
        if (!currentUser) {
            // Código para renderizar la página de inicio de sesión...
        }
        if (currentUser) {
            // Renderizar la información del usuario
            // Utiliza los datos del usuario recibidos del backend (userData)
            infocontent = `
            <div id="app">
            <div class="title-info">
            <div class="url-line">
            <a href="https://zonapets.vercel.app/iniciarsesion/">Cuenta </a><span>> </span><a
                href="https://zonapets.vercel.app/informacionpersonal/">Informacion personal</a></div>
            <div class="personal-info">
                <h1 class="title">Información personal</h1>
            <button class="button-logout" onclick="submitLogout(event)">Cerrar sesión</button></div>
        </div>
        <section class="user-info">
            <div class="item">
                <h6><span><ion-icon class="icon" name="happy-outline"></ion-icon> </span> Nombre</h6>
                <p>${userData.nombre}</p>
            </div>
            <div class="item">
                <p><a href="">Editar</a></p>
            </div>
            <hr>
            <div class="item">
                <h6><span><ion-icon class="icon" name="at-circle-outline"></ion-icon></span> Correo</h6>
                <p>${userData.email}</p>
            </div>
            <div class="item">
                <p><a href="">Editar</a></p>
            </div>
            <hr>
            <div class="item">
                <h6><span><ion-icon class="icon" name="person-outline"></ion-icon></span> Username</h6>
                <p>${userData.username}</p>
            </div>
            <div class="item">
                <p><a href="">Editar</a></p>
            </div>
            <hr>
            <div class="item">
                <h6><span><ion-icon class="icon" name="phone-portrait-outline"></ion-icon></span> Telefono</h6>
                <p>${userData.telefono}</p>
            </div>
            <div class="item">
                <p><a href="">Editar</a></p>
            </div>
            <hr>
            <div class="item">
                <h6><span><ion-icon class="icon" name="flag-outline"></ion-icon></span> Ciudad de residencia</h6>
                <p>${userData.ciudad}
                </p>
            </div>
            <div class="item">
                <p><a href="">Editar</a></p>
            </div>
            <hr>
        </section>
        </div>`;
        }
        app.innerHTML += infocontent;
    }

    // Inicialización
    checkUserStatus();

    // Hacer funciones globales para acceso desde HTML
    window.submitLogin = submitLogin;
    window.submitLogout = submitLogout;
    window.submitRegistration = submitRegistration;
    window.updateFormBtn = updateFormBtn;
});

// Configuración de Axios
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

