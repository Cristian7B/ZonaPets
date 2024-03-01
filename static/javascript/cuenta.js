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

    // authentication.js

    function submitRegistration(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const MIN_PASSWORD_LENGTH = 8;

        if (password.length < MIN_PASSWORD_LENGTH) {
            const errorMessage = document.getElementById('registration-error');
            errorMessage.textContent = `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`;
            errorMessage.style.display = 'block';
            return; // Detener la ejecución de la función si la contraseña es demasiado corta
        }

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
                window.location.href = "https://zonapets.vercel.app/mapa/";
                renderApp();
            })
            .catch(function (error) {
                if (error.response && error.response.status === 500) {
                    // El email ya está registrado
                    const errorMessage = document.getElementById('registration-error');
                    errorMessage.textContent = "Este correo electrónico ya está registrado.";
                    errorMessage.style.display = 'block';
                } else {
                    // Otro tipo de error
                    const errorMessage = document.getElementById('registration-error');
                    errorMessage.textContent = "Ha ocurrido un error durante el registro.";
                    errorMessage.style.display = 'block';
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
                window.location.href = "https://zonapets.vercel.app/mapa/";
                renderApp();
            })
            .catch(function (error) {
                const errorMessage = document.getElementById('login-error');
                errorMessage.textContent = "Credenciales inválidas.";
                errorMessage.style.display = 'block';
            });
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
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
                formContent = `<div class="containerform" id="move-content" style="">
                                    <h1 style="font-size: 34px;">Hora de crear una nueva cuenta</h1>
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
                                           <input type="password" id="password" placeholder="Ingresa una contraseña" />
                                       </div>
                                       <div id="registration-error" class="error-message" style="display: none;"></div>
                                       <div class="buttonslogin">
                                       <button class="auth-button" type="submit">Registrar</button>
                                        </div>  
                                   </form>
                                   <p class="change-screen" style="color:#1385F0; text-align: center; font-weight: bold; margin-top:20px; font-size:12px; ">¿Ya tienes una cuenta?, <span><a style="text-decoration:none; color: #0F5B9E; transition: all 0.3s ease" href="#" onclick="updateFormBtn(event)">inicia sesión</a></span></p>
                               </div>`;
            } else {
                formContent = `<div class="containerform" id="move-content">
                                <h1>Inicia sesion en ZonaPets</h1>
                                   <form onsubmit="submitLogin(event)">
                                       <div class="form-group">
                                           <label>Correo electrónico</label>
                                           <input type="email" id="email" placeholder="Ingresa tu email" />
                                       </div>
                                       <div class="form-group">
                                           <label>Contraseña</label>
                                           <input type="password" id="password" placeholder="Contraseña" />
                                       </div>
                                       <div id="login-error" class="error-message" style="display: none;"></div>
                                       <div class="buttonslogin">
                                       <button class="loginbutton" type="submit">Iniciar sesión</button>
                                        </div>                                   
                                    </form>

                                   <p class="change-screen" style="color:#1385F0; text-align: center; font-weight: bold; margin-top:20px; font-size:12px; ">¿No tienes una cuenta?, <span><a style="text-decoration:none; color: #0F5B9E; transition: all 0.3s ease" href="#" onclick="updateFormBtn(event)">crea una</a></span></p>
                               </div>`;
            }
        } else {
            formContent = `<div class="containerform" id="move-content">
            <h2 class="post-login">¡Has iniciado sesion!</h2>
            <button onclick="submitLogout(event)">Cerrar sesión</button>
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



