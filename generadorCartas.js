/// Generador de cartas 

var listaCartas = ["The Wave", "The Big", "The Fight", "The Fly", "The Mirror", "The Cloud", "The Through",
                    "The Arrow", "The Float", "The Sword", "The Sweet", "The Dark", "The Time", "The Twins",
                    "The Watery"];
var valoresObtenidos = [];
var listaIds = ["presente1", "presente2", "presente3",
                    "pasado1", "pasado2", "pasado3",
                    "futuro1", "futuro2", "futuro3",
                    "amigo", "enemigo"];

// Recorriendo todos los elementos que contienen una carta
function lanzarDestino() {
    
    for (var i = 0; i < listaIds.length; i++) {
        document.getElementById(listaIds[i]).innerHTML = obtenerCarta();
    }

    limpiarListas();
}

// Obteniendo cartas
function obtenerCarta() {
    
    var numCarta = 0;
    var valido = false;   
        
        while(!valido)
        {
            // Generando una posible carta
            numCarta = Math.floor((Math.random() * listaCartas.length));
            // Si no está en la lista de valores... añadir a lista y cambiar elemento
            if (valoresObtenidos.indexOf(numCarta)==-1)
            {
                valoresObtenidos.push(numCarta);  
                valido = true;
            }
        }

    return listaCartas[numCarta];
}

// Limpiando lista de valores obtenidos
function limpiarListas() {
    valoresObtenidos = [];
}