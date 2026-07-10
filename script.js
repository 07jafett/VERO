// ==============================
// PROYECTO VERO 💜
// ==============================

// Pantallas
const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const razones = document.getElementById("razones");
const contador = document.getElementById("contador");
const final = document.getElementById("final");

// Barra de progreso
const barra = document.getElementById("barra");

// Botones
const entrar = document.getElementById("entrar");
const continuarCarta = document.getElementById("continuarCarta");
const siguienteRazon = document.getElementById("siguienteRazon");
const continuarFinal = document.getElementById("continuarFinal");

// Razones
const numeroRazon = document.getElementById("numeroRazon");
const textoRazon = document.getElementById("textoRazon");

const razonesLista = [
    "💜 Amo tu sonrisa.",
    "😊 Amo la forma en que me haces reír.",
    "🌸 Amo tu ternura.",
    "❤️ Amo lo especial que eres.",
    "🤗 Amo cómo me haces sentir.",
    "✨ Amo tu personalidad.",
    "🌹 Amo tu cariño.",
    "🙏 Amo que Dios te puso en mi camino.",
    "🥰 Amo cada momento contigo.",
    "💍 Amo imaginar un futuro contigo."
];

let razonActual = 0;

// Cambiar pantalla
function mostrarPantalla(actual, siguiente) {
    actual.classList.add("oculto");
    siguiente.classList.remove("oculto");
}

// Bienvenida → Carta
entrar.onclick = () => {
    mostrarPantalla(inicio, carta);
    barra.style.width = "40%";
};

// Carta → Razones
continuarCarta.onclick = () => {
    mostrarPantalla(carta, razones);
    barra.style.width = "60%";
};

// Razones
siguienteRazon.onclick = () => {

    razonActual++;

    if (razonActual < razonesLista.length) {

        numeroRazon.textContent = "Razón #" + (razonActual + 1);
        textoRazon.textContent = razonesLista[razonActual];

    } else {

        mostrarPantalla(razones, contador);
        barra.style.width = "85%";

    }

};

// Fecha de inicio
const fechaInicio = new Date("2026-06-08T00:00:00");

// Contador
function actualizarContador() {

    const ahora = new Date();

    let diferencia = ahora - fechaInicio;

    if (diferencia < 0) diferencia = 0;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) / (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) / 1000
    );

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();
setInterval(actualizarContador, 1000);

// Contador → Final
continuarFinal.onclick = () => {

    mostrarPantalla(contador, final);

    barra.style.width = "100%";

};

// ==============================
// Corazones flotando 💜
// ==============================

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.innerHTML = "💜";

    corazon.style.position = "fixed";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.bottom = "-40px";
    corazon.style.fontSize = (18 + Math.random() * 20) + "px";
    corazon.style.pointerEvents = "none";
    corazon.style.zIndex = "1";
    corazon.style.transition = "transform 8s linear, opacity 8s linear";

    document.body.appendChild(corazon);

    setTimeout(() => {
        corazon.style.transform = "translateY(-120vh)";
        corazon.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        corazon.remove();
    }, 8000);

}

setInterval(crearCorazon, 700);
// ==============================
// Música 🎵
// ==============================

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");

let reproduciendo = false;

botonMusica.onclick = () => {

    if (reproduciendo) {

        musica.pause();
        botonMusica.textContent = "🎵 Reproducir música";

    } else {

        musica.play();
        botonMusica.textContent = "⏸️ Pausar música";

    }

    reproduciendo = !reproduciendo;
};