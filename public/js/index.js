// index.js
const dataContainer = document.getElementById('data-container');

fetch('/data')
  .then(response => response.json())
  .then(data => {
    // Muestra la respuesta HTML recibida
    console.log(data)
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
