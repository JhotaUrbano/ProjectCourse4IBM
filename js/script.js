document.addEventListener('DOMContentLoaded', function() {
    // Cambiar las imágenes al hacer clic
    const images = document.querySelectorAll('.clickable-img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const newImageSrc = this.getAttribute('data-image');
            this.src = newImageSrc;  // Cambiar la imagen al hacer clic
        });
    });

    // Resaltar el enlace activo en la barra de navegación
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo de la página actual

    navLinks.forEach(link => {
        // Compara la ruta del enlace con el archivo actual
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');  // Añadir la clase 'active' al enlace activo
        } else {
            link.classList.remove('active');  // Eliminar la clase 'active' de los demás enlaces
        }
    });
    function searchFunction() {
        var query = document.getElementById('search').value;
        alert("Buscando: " + query);
        // Aquí puedes agregar la lógica para realizar la búsqueda
    }
});
