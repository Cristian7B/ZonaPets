document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById('app');
    let currentUser = false;
    let registrationToggle = false;
    let userEmail = "";
    let username = "";

    function checkUserStatus() {
        axios.get("https://zonapets.vercel.app/api/user/", { withCredentials: true })
            .then(function (response) {
                currentUser = true;
                renderApp()
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

        axios.post("https://zonapets.vercel.app/api/register/", { email, username, password })
            .then(function (response) {
                return axios.post("https://zonapets.vercel.app/api/login/", { email, password }, { withCredentials: true });
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

        axios.post("https://zonapets.vercel.app/api/login/", { email, password }, { withCredentials: true })
            .then(function (response) {
                currentUser = true;

                window.location.href = "https://zonapets.vercel.app/vermapa/";
                renderApp();
            });
    }

    function submitLogout(e) {
        e.preventDefault();
        axios.post("https://zonapets.vercel.app/api/logout/", {}, { withCredentials: true })
            .then(function (response) {
                currentUser = false;
                renderApp();
            });
    }

    function renderApp() {
        const app = document.getElementById('app');
        app.innerHTML = '';
        let formContent = '';

        if (!currentUser) {
            if (registrationToggle) {
                formContent = `<div class="containerform" id="move-content" style="margin: 0px auto 70px auto;">
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
                                       <button class="auth-button" type="submit">Registrar</button>
                                   </form>
                                   <p class="change-screen" style="color:#1385F0; text-align: center; font-weight: bold; margin-top:20px; font-size:12px; ">¿Ya tienes una cuenta?, <span><a style="text-decoration:none; color: #0F5B9E; transition: all 0.3s ease" href="#" onclick="updateFormBtn(event)">inicia sesión</a></span></p>
                               </div>`;
            } else {
                formContent = `<div class="containerform" id="move-content">
                                <h1>Hora de iniciar sesión</h1>
                                   <form onsubmit="submitLogin(event)">
                                       <div class="form-group">
                                           <label>Correo electrónico</label>
                                           <input type="email" id="email" placeholder="Ingresa tu email" />
                                       </div>
                                       <div class="form-group">
                                           <label>Contraseña</label>
                                           <input type="Contraseña" id="password" placeholder="Contraseña" />
                                       </div>
                                       <button type="submit">Iniciar sesión</button>
                                   </form>
                                   <p class="change-screen" style="color:#1385F0; text-align: center; font-weight: bold; margin-top:20px; font-size:12px; ">¿No tienes una cuenta?, <span><a style="text-decoration:none; color: #0F5B9E; transition: all 0.3s ease" href="#" onclick="updateFormBtn(event)">crea una</a></span></p>
                               </div>`;
            }
        } else {
            formContent = `<div style="margin: 0px auto 270px auto;" class="containerform" id="move-content">
            <h2 class="post-login">¡Has iniciado sesion!</h2>
            <button class="logout-button">
            <a style="text-decoration:none; font-weight:bold; color: #fff; padding:10px; margin-top:10px"href="https://zonapets.vercel.app/vermapa/">
            Ir al mapa
            </a>
            </button>
            </div>`;
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

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);




