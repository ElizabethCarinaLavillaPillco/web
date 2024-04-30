// Capturamos elementos DOM relevantes
const mainNavLinks = document.getElementById('mainNavLinks');
const secondaryNavbar = document.querySelector('.secondary-navbar');
const barsIcon = document.querySelector('.fa-bars');

// Función para mostrar/ocultar el secondary-navbar
function toggleSecondaryNavbar() {
    if (window.innerWidth <= 420) {
        secondaryNavbar.style.display = 'none';
    } else {
        secondaryNavbar.style.display = 'flex';
    }
}

// Función para mostrar/ocultar el main-navbar
function toggleMainNavbar() {
    if (window.innerWidth <= 620) {
        mainNavLinks.style.display = 'none';
    } else {
        mainNavLinks.style.display = 'flex';
    }
}

// Llamamos a las funciones al cargar la página
toggleSecondaryNavbar();
toggleMainNavbar();

// Event listener para mostrar/ocultar main-navbar al hacer clic en el icono de barras
barsIcon.addEventListener('click', function() {
    if (mainNavLinks.style.display === 'none') {
        mainNavLinks.style.display = 'flex';
    } else {
        mainNavLinks.style.display = 'none';
    }
});

// Event listener para manejar los cambios de tamaño de la ventana
window.addEventListener('resize', function() {
    toggleSecondaryNavbar();
    toggleMainNavbar();
});


//slider

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

slides[manual].classList.add('active');
btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

var repeat = function(_activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;
    
    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide)=> {
                activeSlide.classList.remove('active');
            });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
            i=0;
        }
        if(i>= slides.length){
            return;
        }
        repeater();
    }, 10000);
    }
    repeater();
    }
    repeat();
