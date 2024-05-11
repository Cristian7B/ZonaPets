document.addEventListener("DOMContentLoaded", function() {
    const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        textIn = optionMenu.querySelector(".text-in");

    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
    options.forEach(option =>{
        option.addEventListener("click", ()=> {
            let selectedOption = option.querySelector(".option-d").innerText;
            textIn.innerText = selectedOption;
            optionMenu.classList.remove("active")
        });
    });

    if (window.location.href.includes("/registrar/")) {
        textIn.innerText = "Usuario";
    } else if (window.location.href.includes("/registrarempresa/")) {
        textIn.innerText = "Propietario";
    }
});
