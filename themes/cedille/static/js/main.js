/*const slideMenu = () => {
    const burger = document.getElementsByClassName(".burger");
    const navLinks = document.getElementsByClassName(".navbar");

    burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    })
}

slideMenu();*/


const slideMenu = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar ul");
    const navLinks = document.querySelectorAll(".navbar ul li");

    burger.addEventListener("click", () =>{
        nav.classList.toggle(".navbar.active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";    
            }else{
                link.style.animation = "navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s"
            }
        });

        burger.classList.toggle("toggle");
    });
}

slideMenu();