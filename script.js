// Lista de imágenes
const imagenes = [
  "img/Dany.jpg",
  "img/hotd.jpg",
  "img/viserion.jpg",
  "img/seven.jpg"
];

let indice = 0; // posición actual

function cambiarImagen() {
  const banner = document.getElementById("banner");
  
  // efecto de desvanecimiento
  banner.style.opacity = 0;

  setTimeout(() => {
    indice = (indice + 1) % imagenes.length; // siguiente imagen
    banner.src = imagenes[indice];
    
    // vuelve a aparecer con transición suave
    banner.onload = () => {
      banner.style.opacity = 1;
    };
  }, 400);
}

//carrusel automático cada 5 segundos ===
setInterval(cambiarImagen, 5000);


