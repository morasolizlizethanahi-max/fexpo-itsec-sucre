// Configuración personalizada de Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            colors: {
                itsec: {
                    blue: '#0B2545',
                    navy: '#134074',
                    gold: '#D4AF37',
                    amber: '#FFBF00',
                    light: '#EEF4F8',
                    card: '#FFFFFF'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
};

// Función para cambiar de pestaña (SPA)
function openTab(tabId) {
    // Ocultar todas las secciones
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Quitar estilo activo de todos los botones
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active-tab-btn');
        btn.classList.add('text-gray-200');
    });

    // Mostrar la sección seleccionada
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    // Marcar el botón activo
    const btnIndex = tabId.replace('tab-', '');
    const activeBtn = document.getElementById(`btn-tab-${btnIndex}`);
    if (activeBtn) {
        activeBtn.classList.add('active-tab-btn');
        activeBtn.classList.remove('text-gray-200');
    }
}

// Función auxiliar para previsualizar archivos de video locales
function previewMedia(event, targetMediaId) {
    const file = event.target.files[0];
    if (file) {
        const mediaElement = document.getElementById(targetMediaId);
        mediaElement.src = URL.createObjectURL(file);
        mediaElement.load();
    }
}