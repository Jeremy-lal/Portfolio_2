export function menu() {

    let displayMenu = false;
    let left = 100;

    const burger = document.getElementsByClassName('hamburger-menu')[0];
    const menuContainer = document.getElementsByClassName('menuContainer')[0];

    burger.addEventListener('click', () => {
        toggleMenu()
    });


    const menuItems = document.getElementsByClassName('menu-item');

    for (let item of menuItems) {
        item.addEventListener('click', () => {
            toggleMenu()
        })
    }

    function toggleMenu() {
        displayMenu = !displayMenu;
        if (displayMenu) {
            burger.classList.add("open");
            menuContainer.style.left = '0';
        } else {
            burger.classList.remove("open");
            left = -left;
            menuContainer.style.left = `${left}vw`;
        }
    }
}