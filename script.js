document.addEventListener('DOMContentLoaded', () => {

    const introContainer = document.querySelector('.intro');
    const startBtn = document.querySelector('.intro-btn');
    const engineAudio = new Audio('motor.mp3');
    engineAudio.preload = 'auto';

    startBtn.addEventListener('click', () => {

        if (!engineAudio.src) {
            return;
        }

        engineAudio.currentTime = 0;

        engineAudio.play().catch(error => {
            console.error('No se pudo reproducir motor.mp3:', error);
        });

        introContainer.classList.add('launching');

        setTimeout(() => {

            introContainer.classList.add('exiting');

            startSpecialEffects();

        }, 1100);

    });

});

function startSpecialEffects() {

    const cars = document.getElementById('cars');
    const mensaje = document.getElementById('mensaje-final');
    const ramo = document.querySelector('.ramo');

    cars.innerHTML = '';
    
    if (ramo) {
        ramo.classList.add('show');
    }

    // Crear carros volando
    for (let i = 0; i < 15; i++) {

        const car = document.createElement('img');

        car.src = 'hotwheels.jpg';

        car.classList.add('floating-car');

        car.style.top =
            (18 + Math.random() * 62) + 'vh';

        car.style.width =
            (88 + Math.random() * 52) + 'px';

        car.style.animationDuration =
            (5 + Math.random() * 5) + 's';

        car.style.animationDelay =
            Math.random() * 3 + 's';

        cars.appendChild(car);
    }

    // Mostrar mensaje final
    setTimeout(() => {

        if (mensaje) {
            mensaje.classList.add('show');
        }

    }, 4500);
}

const ramo = document.querySelector('.ramo');
const florBase = document.querySelector('.girasol');

if (ramo && florBase) {
    for (let numeroFlor = 6; numeroFlor <= 9; numeroFlor++) {
        const flor = florBase.cloneNode(true);
        flor.classList.remove('flor1');
        flor.classList.add(`flor${numeroFlor}`);
        ramo.appendChild(flor);
    }
}

/* Animación de las flores */

const flores = document.querySelectorAll('.girasol');

flores.forEach((flor, index) => {
    flor.style.animationDelay = `${index * 0.3}s`;
});

/* Brillos azules */

function crearBrillo() {

    const brillo = document.createElement('div');

    brillo.classList.add('brillo');

    brillo.style.left =
        Math.random() * 100 + 'vw';

    brillo.style.top =
        Math.random() * 100 + 'vh';

    document.body.appendChild(brillo);

    setTimeout(() => {
        brillo.remove();
    }, 2000);
}

setInterval(crearBrillo, 500);

function mensajeRamo() {
    alert('💙 Un pequeño ramo azul para ti 🦋');
}