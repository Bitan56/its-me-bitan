const headerMenu = document.querySelector('.drop-down-header-menu');
const menuList = document.querySelector('.drop-down-menu-list')

const dropHeaderMenu = () => {
    if (headerMenu.style.height === '0px') {
        headerMenu.style.height = '400px';
    }else {
        headerMenu.style.height = '0px';
    }
}

const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        scrollToTopBtn.classList.add("active");
    }else{
        scrollToTopBtn.classList.remove("active");
    }
})