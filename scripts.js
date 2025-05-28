document.addEventListener('DOMContentLoaded', function() {
    // Sección Habilidades
    const toggleHabilidadesBtn = document.getElementById('toggleHabilidades');
    const listaHabilidadesEl = document.getElementById('listaHabilidades');
    const iconHabilidades = toggleHabilidadesBtn.querySelector('.toggle-icon');

    if (toggleHabilidadesBtn && listaHabilidadesEl && iconHabilidades) {
        toggleHabilidadesBtn.addEventListener('click', function() {
            listaHabilidadesEl.classList.toggle('hidden');
            // Cambiar el ícono
            if (listaHabilidadesEl.classList.contains('hidden')) {
                iconHabilidades.textContent = '(+)';
            } else {
                iconHabilidades.textContent = '(-)';
            }
        });
    }

    // Sección Educación
    const toggleEducacionBtn = document.getElementById('toggleEducacion');
    const listaEducacionEl = document.getElementById('listaEducacion');
    const iconEducacion = toggleEducacionBtn.querySelector('.toggle-icon');

    if (toggleEducacionBtn && listaEducacionEl && iconEducacion) {
        toggleEducacionBtn.addEventListener('click', function() {
            listaEducacionEl.classList.toggle('hidden');
            // Cambiar el ícono
            if (listaEducacionEl.classList.contains('hidden')) {
                iconEducacion.textContent = '(+)';
            } else {
                iconEducacion.textContent = '(-)';
            }
        });
    }
});