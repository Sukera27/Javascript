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