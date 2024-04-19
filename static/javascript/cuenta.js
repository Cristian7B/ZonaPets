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

        const MIN_PASSWORD_LENGTH = 8;

        if (password.length < MIN_PASSWORD_LENGTH) {
            const errorMessage = document.getElementById('registration-error');
            errorMessage.textContent = `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`;
            errorMessage.style.display = 'block';
            return; 
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
                    const errorMessage = document.getElementById('registration-error');
                    errorMessage.textContent = "Este correo electrónico ya está registrado.";
                    errorMessage.style.display = 'block';
                } else {
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
                                    <h1>Crea una cuenta</h1>
                                    <div id="registration-error" class="error-message" style="display: none;"></div>
                                    <div class="register">
                                        <div class="line-register"></div>
                                        <div class="label-register" onclick="updateFormBtn(event)">O inicia sesion</div>
                                        <div class="line-register"></div>
                                    </div>
                                   <form onsubmit="submitRegistration(event)">
                                       <div class="form-group">
                                           <label>Correo</label>
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
                                       <div class="buttonslogin">
                                       <button class="auth-button" type="submit">Registrar</button>
                                        </div>  
                                   </form>
                                   
                               </div>`;
            } else {
                formContent = `<div class="containerform" id="move-content">
                                <h1>Inicia sesion</h1>
                                <div id="login-error" class="error-message" style="display: none;"></div>
                                <div class="register">
                                    <div class="line-register"></div>
                                    <div class="label-register" onclick="updateFormBtn(event)">O crea una cuenta</div>
                                    <div class="line-register"></div>
                                </div>
                                   <form onsubmit="submitLogin(event)">
                                       <div class="form-group">
                                           <label>Correo</label>
                                           <input type="email" id="email" placeholder="Ingresa tu email" />
                                       </div>
                                       <div class="form-group">
                                           <label>Contraseña</label>
                                           <input type="password" id="password" placeholder="Contraseña" />
                                       </div>
                                       <div class="buttonslogin">
                                       <button class="loginbutton" type="submit">Iniciar sesión</button>
                                        </div>                                   
                                    </form>

                                   
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


    checkUserStatus();

    window.submitLogout = submitLogout;
    window.submitLogin = submitLogin;
    window.submitRegistration = submitRegistration;
    window.updateFormBtn = updateFormBtn;
});


axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);



