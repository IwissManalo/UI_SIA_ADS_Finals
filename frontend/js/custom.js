function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}

function registerManager() {
    alert('Registered Account Successfully!');
    window.location.href = 'index.html';
}

function registerEmployee() {
    alert('Registered Employee Successfully!');
    window.history.back();
}

function logOut() {
    alert('Log-out Successfully!');
    window.location.href = 'index.html';
    
}

function logIn() {
    alert('Log-In Successfully!');
    window.location.href = 'managerPortal.html';
}

function goBack() {
    window.history.back();
}

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});