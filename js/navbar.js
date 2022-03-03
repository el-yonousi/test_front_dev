function openMenu() {
    const menu = document.querySelector("#navMenu").getAttribute("class");
    if (menu.includes("nav-mobile")) {
        document.querySelector("#navMenu").classList.remove("nav-mobile")
        document.querySelector("#navMenu").setAttribute("class", "nav-ul")
        document.querySelector("[data-close]").removeAttribute("style")
    } else {
        document.querySelector("#navMenu").setAttribute("class", "nav-mobile")
        document.querySelector("[data-close]").setAttribute("style", "display: flex;")
    }
}

function closeMenu() {
    document.querySelector("#navMenu").classList.remove("nav-mobile")
    document.querySelector("#navMenu").setAttribute("class", "nav-ul")
    document.querySelector("[data-close]").removeAttribute("style")
}