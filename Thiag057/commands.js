// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


/* BUTTON TO SCROLL */
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

/* FOR MOBILE DEVICES */
function toggleMenu() {
    const iconNav = document.getElementById("iconNav");
    const menu = document.querySelector('.menu');

    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        iconNav.innerHTML = "Instrumentos musicales";
    } 
    else {
        menu.style.display = 'flex';
        iconNav.innerHTML = "X";
    }
}


input_filter.addEventListener("click", () =>{
    var inputElement = document.getElementById('input_filter');
    inputElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    inputElement.focus();
})