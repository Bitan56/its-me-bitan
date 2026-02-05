const headerMenu = document.querySelector('.drop-down-header-menu');
const menuList = document.querySelector('.drop-down-menu-list')

const dropHeaderMenu = () => {
    if (headerMenu.style.height === '0px') {
        headerMenu.style.height = '400px';
    }else {
        headerMenu.style.height = '0px';
    }
}