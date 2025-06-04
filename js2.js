 // Cargar sonidos (ajusta las rutas según tu estructura de carpetas)
  const sonido1 = new Audio('click.mp3');
  const sonido2 = new Audio('assets/sounds/prueba2.mp3');
  const sonido3 = new Audio('subir.mp3');

  // Función para asignar el sonido a todos los elementos con una clase
  function asignarSonido(clase, sonido) {
    const elementos = document.querySelectorAll(`.${clase}`);
    elementos.forEach(el => {
      el.addEventListener('click', () => {
        sonido.currentTime = 0; // Reinicia si ya se está reproduciendo
        sonido.play();
      });
    });
  }
  // Asignar los sonidos a las clases correspondientes
  asignarSonido('audio-prueba', sonido1);
  asignarSonido('boton-prueba', sonido2);
  asignarSonido('boton-desc', sonido3);

/////////////////////////////////////

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
    
  function showCategory(category) {
    document.getElementById('btn-apps').classList.remove('active');
    document.getElementById('btn-contacts').classList.remove('active');
    document.getElementById('content-apps').style.display = 'none';
    document.getElementById('content-contacts').style.display = 'none';

    if (category === 'apps') {
      document.getElementById('btn-apps').classList.add('active');
      document.getElementById('content-apps').style.display = 'block';
    } else {
      document.getElementById('btn-contacts').classList.add('active');
      document.getElementById('content-contacts').style.display = 'block';
    }
  }

  function toggleSubmenu(btn) {
    const submenu = btn.parentElement.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  }