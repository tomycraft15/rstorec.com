// Seleccionar todos los botones
const buttons = document.querySelectorAll('.btn');

// Función que cambia el color de fondo de la página
function cambiarFondo(color) {
    document.body.style.backgroundColor = color;
}

// Objeto para asociar clases con colores
const coloresFondo = {
    Flujotv: 'rgba(249, 77, 3, 0.6)',  // Naranja Flujotv
    disney: 'rgba(27, 99, 162, 0.6)', // Azul Disney+
    hbo: 'rgba(55, 13, 83, 0.6)',    // Rojo HBO
    spotify: 'rgba(29, 185, 84, 0.6)', // Verde Spotify
    youtube: 'rgba(255, 0, 0, 0.6)',   // Rojo YouTube
    crunchyroll: 'rgba(255, 102, 0, 0.6)', // Naranja Crunchyroll
    paramount: 'rgba(14, 51, 146, 0.6)',  // Azul Paramount
    'Amazon-Prime': 'rgba(26, 83, 164, 0.6)',  // Azul Amazon-prime
    'Vix-Premium': 'rgba(232, 133, 13, 0.6)',  // Naranja Vix-Premium
};

// Fondo inicial
const fondoInicial = '#f4f4f4';

// Agregar eventos de hover dinámicamente
buttons.forEach(button => {
    // Encontrar la clase específica asociada al color
    const clase = [...button.classList].find(c => coloresFondo[c]) || '';

    button.addEventListener('mouseover', () => {
        if (coloresFondo[clase]) {
            cambiarFondo(coloresFondo[clase]);
        }
    });

    button.addEventListener('mouseout', () => {
        cambiarFondo(fondoInicial);
    });
});
