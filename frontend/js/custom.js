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
// Log In as Employee or Managers
function logIn() {
    alert('Log-In Successfully!');
    window.location.href = 'managerPortal.html';
}

function goBack() {
    window.history.back();
}

function confirmDelete() {
    if (confirm("Are you sure you want to delete this schedule?")) {
      alert("Schedule Deleted Completely");
      // Logic to delete the problem goes here
    }
  }

function showNewScheduleForm() {
    var newScheduleForm = document.getElementById("newScheduleForm");
    newScheduleForm.style.display = "block";
  }

  function showNewScheduleForm2() {
    var newScheduleForm2 = document.getElementById("newScheduleForm2");
    newScheduleForm2.style.display = "block";
  }
  
  function saveNewSchedule() {
    var newScheduleForm = document.getElementById("newScheduleForm");
    newScheduleForm.style.display = "none";
    alert("Schedule successfully added!");
  }

  function saveNewSchedule2() {
    var newScheduleForm = document.getElementById("newScheduleForm2");
    newScheduleForm.style.display = "none";
    alert("Schedule Successfully Updated!");
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