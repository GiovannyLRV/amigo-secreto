let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();
    
    // Verificar que el nombre no esté vacío
    if (nombreAmigo !== '') {
        amigos.push(nombreAmigo);
        input.value = '';  // Limpiar el campo de texto

        // Actualizar la lista en la interfaz
        actualizarListaAmigos();
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

// Función para mostrar los amigos en la lista
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';  

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos 2 personas para realizar el sorteo.');
        return;
    }

    const resultados = document.getElementById('resultado');
    resultados.innerHTML = '';  // Limpiar resultados previos

    // Elegir un amigo aleatorio del arreglo de amigos
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado con el mensaje
    const li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;
    resultados.appendChild(li);
}