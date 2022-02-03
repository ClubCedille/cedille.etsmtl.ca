const slideMenu = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');
    //const navLinks = document.querySelectorAll('.navbar ul li');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('.navbar.active');

        /*
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';    
            }else{
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 5 + 1.5}s'
            }
        });
        */

        burger.classList.toggle('toggle');
    });
}

slideMenu();
