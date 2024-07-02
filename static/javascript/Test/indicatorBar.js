const linkItems = document.querySelectorAll(".link-item");
console.log(linkItems)

linkItems.forEach((linkItem, index) => {
    linkItem.addEventListener("click", () => {
        console.log("click")

        document.querySelector(".active").classList.remove("active");
        linkItem.classList.add("active");

        const indicator = document.querySelector(".indicator");

        indicator.style.left = `${index * 95 + 48}px`;
    })
})
