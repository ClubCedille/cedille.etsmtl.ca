const slideMenu = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navbar');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('.navbar.active');
        burger.classList.toggle('toggle');
    });
}

slideMenu();
