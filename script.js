// Seleccionar todos los botones
const buttons = document.querySelectorAll('.btn');

// Función que cambia el color de fondo de la página
function cambiarFondo(color) {
    document.body.style.backgroundColor = color;
}

// Objeto para asociar clases con colores
const coloresFondo = {
    disney: 'rgba(29, 136, 229, 0.6)', // Azul Disney+
    hbo: 'rgba(121, 41, 174, 0.6)',    // Rojo HBO
    spotify: 'rgba(29, 185, 84, 0.6)', // Verde Spotify
    youtube: 'rgba(255, 0, 0, 0.6)',   // Rojo YouTube
    crunchyroll: 'rgba(255, 102, 0, 0.6)', // Naranja Crunchyroll
    paramount: 'rgba(14, 77, 146, 0.6)'  // Azul Paramount
};

// Fondo inicial
const fondoInicial = '#f4f4f4';

// Agregar eventos de hover dinámicamente
buttons.forEach(button => {
    // Obtener la clase específica del botón (e.g., disney, hbo, spotify, youtube, crunchyroll, paramount)
    const clase = button.classList[1]; // Assumiendo que la clase es la segunda en la lista (disney, hbo, spotify, etc.)
    
    button.addEventListener('mouseover', () => {
        if (coloresFondo[clase]) {
            cambiarFondo(coloresFondo[clase]);
        }
    });

    button.addEventListener('mouseout', () => {
        cambiarFondo(fondoInicial);
    });
});
