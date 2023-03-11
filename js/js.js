/*ejercicio 1*/
function cambiotema(){
    var seleccionar=document.getElementById("colores").value;
    document.body.style.backgroundColor=seleccionar;
}
/*ejercicio 2*/

document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('modulo');
    const container = document.querySelector('#filtrar');
    const cards = document.querySelectorAll('[data-categoria]');
  
    select.addEventListener('change', () => {
      const valorSelect = select.value;
      cards.forEach((card) => {
        const categorias = card.dataset.categoria.split(' ');
        if (valorSelect === 'all' || categorias.includes(valorSelect)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  /*ejercicio 3*/
const nombreInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const descripcionInput = document.getElementById('descripcion');

        function actualizarEstadoInput(input) {
            if (input.value.trim() === '') {
                input.classList.remove('valido');
                input.classList.remove('invalido');
            } else if (input.classList.contains('invalido')) {
                input.classList.remove('invalido');
                input.classList.add('valido');
            } else {
                input.classList.add('valido');
            }
        }

        function actualizarNombre() {
            actualizarEstadoInput(nombreInput);
            if (nombreInput.classList.contains('valido')) {
                nombreInput.style.borderColor = '#00ff00';
            } else {
                nombreInput.style.borderColor = '#ff0000';
            }
        }

        function actualizarEmail() {
            actualizarEstadoInput(emailInput);
            if (emailInput.checkValidity()) {
                emailInput.style.borderColor = '#00ff00';
            } else {
                emailInput.style.borderColor = '#ff0000';
            }
        }

        function actualizarDescripcion() {
            actualizarEstadoInput(descripcionInput);
            if (descripcionInput.classList.contains('valido')) {
                descripcionInput.style.borderColor = '#00ff00';
            } else {
                descripcionInput.style.borderColor = '#ff0000';
            }
        }

        nombreInput.addEventListener('input', actualizarNombre);
        emailInput.addEventListener('input', actualizarEmail);
        descripcionInput.addEventListener('input', actualizarDescripcion);

        nombreInput.addEventListener('blur', actualizarNombre);
        emailInput.addEventListener('blur', actualizarEmail);
        descripcionInput.addEventListener('blur', actualizarDescripcion);