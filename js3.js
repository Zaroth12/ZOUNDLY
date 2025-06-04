 
  // Cambia el color activo y redirige a otra página
    function navigate(url) {
      // Limpia el estado activo
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });

      // Establece activo el botón que se presionó
      event.currentTarget.classList.add('active');

      // Redirige
      window.location.href = url;
    }
 function mostrarPerfilSeccion(seccion) {
    // Cambiar visibilidad
    document.getElementById('contenido-favoritos').style.display = (seccion === 'favoritos') ? 'block' : 'none';
    document.getElementById('contenido-subidos').style.display = (seccion === 'subidos') ? 'block' : 'none';

    // Alternar botones activos
    document.getElementById('btn-favoritos').classList.toggle('active', seccion === 'favoritos');
    document.getElementById('btn-subidos').classList.toggle('active', seccion === 'subidos');
  }

let iniciado = false;


