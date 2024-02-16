document.addEventListener("DOMContentLoaded", function () {
    const app = document.getElementById('app');
    let currentUser = false;

    function checkUserStatus() {
        axios.get("127.0.0.1:8000/api/user/", { withCredentials: true })
            .then(function (response) {
                currentUser = true;
                renderApp();
            })
            .catch(function (error) {
                currentUser = false;
                renderApp();
            });
    }

    function renderApp() {
        app.innerHTML = '';

        if (!currentUser) {
            redirectToSignupPage();
        } else {
            renderLoggedInInterface();
        }
    }

    function redirectToSignupPage() {
        const signupInterface = `
            <div class="containerform" id="move-content" style="margin: 100px auto 700px auto;">
                <img srv="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg" style="heigth:100px; width:100px" >
                <h1>Es hora de iniciar sesión</h1>
                <p>¿Aún no tienes una cuenta? </p>
                <button class="auth-button" onclick="window.location.href='127.0.0.1:8000/micuenta/'">Inicia Sesión</button>
            </div>`;
        app.innerHTML = signupInterface;
    }

    function renderLoggedInInterface() {
        const loggedInInterface = `
            <div class="containerform" id="move-content">
                <h1 class="post-login">¡Has iniciado sesión!</h1>
            </div>`;
        app.innerHTML = loggedInInterface;
    }

    // Inicialización
    checkUserStatus();
    

    // Hacer funciones globales para acceso desde HTML
    window.submitLogin = submitLogin;

    // Opcional: mover esta función al final si no se necesita de inmediato
    window.updateFormBtn = updateFormBtn;
});

// Configuración de Axios
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

// Aquí puedes agregar la función `updateFormBtn()` si aún es necesaria.

document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
