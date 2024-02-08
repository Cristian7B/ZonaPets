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
                                           <input type="Contraseña" id="password" placeholder="Ingresa una contraseña" />
                                       </div>
                                       <div class="buttonslogin">
                                       <button class="auth-button" type="submit">Registrar</button>
                                       <button class="google-login-button">
                                       <svg width="24" height="24" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="google-logo">
                                       <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
                                       <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
                                       <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
                                       <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
                                       </svg>
                                       <a href="https://ichkajetuosnsagucjag.supabase.co/auth/v1/authorize?provider=google" target="_blank">Continuar con Google</a>
                                        </button>
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
                                           <input type="Contraseña" id="password" placeholder="Contraseña" />
                                       </div>
                                       <div class="buttonslogin">
                                       <button class="loginbutton" type="submit">Iniciar sesión</button>
                                       <button class="google-login-button">
                                       <svg width="24" height="24" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" class="google-logo">
                                       <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
                                       <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
                                       <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
                                       <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
                                       </svg>
                                       <a href="https://ichkajetuosnsagucjag.supabase.co/auth/v1/authorize?provider=google" target="_blank">Continuar con Google</a>
                                        </button>
                                        </div>                                   
                                    </form>

                                   <p class="change-screen" style="color:#1385F0; text-align: center; font-weight: bold; margin-top:20px; font-size:12px; ">¿No tienes una cuenta?, <span><a style="text-decoration:none; color: #0F5B9E; transition: all 0.3s ease" href="#" onclick="updateFormBtn(event)">crea una</a></span></p>
                               </div>`;
            }
        } else {
            formContent = `<div class="containerform" id="move-content">
            <h2 class="post-login">¡Has iniciado sesion!</h2>
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



