// elementos del html
const itemInput = document.getElementById('item');
const btnAgregar = document.getElementById('agregar');
const contenedor = document.getElementById('contenedor');
const btnLimpiar = document.getElementById('limpiar');

// funcion para cargar la lista desde el localStorage
function cargarLista() {
    const lista = JSON.parse(localStorage.getItem('lista')) || []; // esto recupera la lista almacenada en el localStorage o crea un array vacio
    contenedor.innerHTML = ''; // esto limpia el contenedor
    lista.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = element;
        contenedor.appendChild(li);
    });
}
// funcion para agregar un nuevo item
function agregarItem() {
    const nuevoItem = itemInput.value.trim() //esto elimina espacios al principio y al final
    if (nuevoItem !== '') {
        let lista = JSON.parse(localStorage.getItem('lista')) || []; // recupera la lista existente o crea una nueva
        lista.push(nuevoItem); // agrega un nuevo item
        localStorage.setItem('lista', JSON.stringify(lista)); // convierte de js a string y guarda la lista actualizada en el localStorage
        cargarLista(); // esto actualiza la vista
        itemInput.value = '' // esto limpia el campo de texto una vez insertado y agregado el valor
 }
};
// funcion para limpiar lista
function limpiarLista() {
    localStorage.removeItem('lista') // elimina la lista del localStorage
    cargarLista() // actualizar la lista 'ahora vacia' 
}
//eventos
btnAgregar.addEventListener('click', agregarItem);
btnLimpiar.addEventListener('click', limpiarLista);
// carga la lista al inicio
window.addEventListener('DOMContentLoaded', cargarLista)