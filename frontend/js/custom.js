function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");
}

function registerAndRedirect() {
    alert('Registered Account Successfully!');
    setTimeout(function() {
      window.location.href = 'managerPortal.html';
    });
}

function logOut() {
    alert('Log-out Successfully!');
    setTimeout(function() {
      window.location.href = 'index.html';
    });
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