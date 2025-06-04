 // Cargar sonidos (ajusta las rutas según tu estructura de carpetas)
  const sonido1 = new Audio('click.mp3');
  const sonido2 = new Audio('prueba.mp3');
  const sonido3 = new Audio('assets/sounds/prueba3.mp3');

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
   function showCategory(categoria) {
      document.getElementById('btn-tonos').classList.remove('active');
      document.getElementById('btn-notificaciones').classList.remove('active');
      document.getElementById('content-tonos').style.display = 'none';
      document.getElementById('content-notificaciones').style.display = 'none';

      if (categoria === 'tonos') {
        document.getElementById('btn-tonos').classList.add('active');
        document.getElementById('content-tonos').style.display = 'block';
      } else {
        document.getElementById('btn-notificaciones').classList.add('active');
        document.getElementById('content-notificaciones').style.display = 'block';
      }
    }

function toggleFavorite() {
      const icon = document.getElementById("fav-icon");
      if (icon.innerText === "star") {
        icon.innerText = "star";
        icon.style.color = "#ffd600";
        icon.classList.add("filled");
      } else {
        icon.innerText = "star";
        icon.style.color = "#511401";
        icon.classList.remove("filled");
      }
    }
    
    function selectOption(id) {
      document.getElementById("btn-tono").classList.remove("active");
      document.getElementById("btn-noti").classList.remove("active");
      document.getElementById(id).classList.add("active");
    }

    function toggleCard(id) {
      const content = document.getElementById(`expand-${id}`);
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }

