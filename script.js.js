// Inicializar datos si no existen
if (!localStorage.getItem('registrations')) {
    localStorage.setItem('registrations', JSON.stringify([]));
}

// Guardar un nuevo registro
function guardarRegistro(registro) {
    const registros = JSON.parse(localStorage.getItem('registrations'));
    registros.push(registro);
    localStorage.setItem('registrations', JSON.stringify(registros));
}

// Obtener todos los registros
function obtenerRegistros() {
    return JSON.parse(localStorage.getItem('registrations'));
}