document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById('app');
    let currentUser = false;
    let registrationToggle = false;

    function checkUserStatus() {
        axios.get("http://127.0.0.1:8000/api/user/", { withCredentials: true })
            .then(function (response) {
                currentUser = true;
                renderApp();
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

    function submitRegistration(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        axios.post("http://127.0.0.1:8000/api/register/", { email, username, password })
            .then(function (response) {
                return axios.post("http://127.0.0.1:8000/api/login/", { email, password }, { withCredentials: true });
            })
            .then(function (response) {
                currentUser = true;
                renderApp();
            });
    }

    function submitLogin(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        axios.post("http://127.0.0.1:8000/api/login/", { email, password }, { withCredentials: true })
            .then(function (response) {
                currentUser = true;
                renderApp();
            });
    }

    function submitLogout(e) {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/logout/", {}, { withCredentials: true })
            .then(function (response) {
                currentUser = false;
                renderApp();
            });
    }

    function renderApp() {
        const app = document.getElementById('app');
        app.innerHTML = '';

        let navbar = `<section>
                        <img src="/static/imagenes/Logo.png" alt="img-waulandia" class="imgnavbar">
                        <a href="http://zonapets.onrender.com/inicio-zonapets/" class="logo-nombre">ZonaPets</a>
                        <nav class="navegacion" id="move-menu">
                            <ul class="menu-horizontal">
                                <li><a href="http://zonapets.onrender.com/inicio-zonapets/"><i class="fa fa-home" id="navbar" aria-hidden="true"></i> Inicio</a></li>
                                <li><a href="http://zonapets.onrender.com/acercade/"><i class="fa fa-users" aria-hidden="true"></i> Acerca de ZonaPets</a></li>
                                <li><a href="http://zonapets.onrender.com/contacto/"><i class="fa fa-phone-square" aria-hidden="true"></i> Contacto</a></li>
                                <li><a href="https://www.facebook.com/" class="fa fa-facebook"></a></li>
                                <li><a href="https://www.instagram.com/" class="fa fa-instagram"></a></li>
                                <li><a href="https://www.youtube.com/" class="fa fa-youtube-play"></a></li>`;

        if (currentUser) {
            navbar += `<li><button class="logout-button" onclick="submitLogout(event)">Log out</button></li>`;
        } else {
            let buttonText = registrationToggle ? "Log in" : "Register";
            navbar += `<li><button class="auth-button" id="form_btn" onclick="updateFormBtn()">${buttonText}</button></li>`;
        }

        navbar += `       </ul>
                        </nav>
                        <div id="icon-menu">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </div>
                      </section>`;
        app.innerHTML += navbar;

        let formContent = '';

        if (!currentUser) {
            if (registrationToggle) {
                formContent = `<div class="containerform">
                                    <h1>Hora de crear una nueva cuenta</h1>
                                   <form onsubmit="submitRegistration(event)">
                                       <div class="form-group">
                                           <label>Correo electrónico</label>
                                           <input type="email" id="email" placeholder="Ingresa tu email" />
                                       </div>
                                       <div class="form-group">
                                           <label>Nombre de usuario</label>
                                           <input type="text" id="username" placeholder="Ingresa un username" />
                                       </div>
                                       <div class="form-group">
                                           <label>Contraseña</label>
                                           <input type="Contraseña" id="password" placeholder="Ingresa una contraseña" />
                                       </div>
                                       <button class="auth-button" type="submit">Submit</button>
                                   </form>
                                   <p class="change-screen">¿Ya tienes una cuenta?, <span><a href="#" onclick="updateFormBtn(event)">inicia sesión</a></span></p>
                               </div>`;
            } else {
                formContent = `<div class="containerform">
                                <h1>Hora de crear iniciar sesión</h1>
                                   <form onsubmit="submitLogin(event)">
                                       <div class="form-group">
                                           <label>Correo electrónico</label>
                                           <input type="email" id="email" placeholder="Ingresa tu email" />
                                       </div>
                                       <div class="form-group">
                                           <label>Contraseña</label>
                                           <input type="Contraseña" id="password" placeholder="Contraseña" />
                                       </div>
                                       <button type="submit">Submit</button>
                                   </form>
                                   <p class="change-screen">¿No tienes una cuenta?, <span><a href="#" onclick="updateFormBtn(event)">crea una</a></span></p>
                               </div>`;
            }
        } else {
            formContent = `<div class="containerform"><h2 class="post-login">¡Has iniciado sesion!</h2></div>`;
        }

        app.innerHTML += formContent;
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

