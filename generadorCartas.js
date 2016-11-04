/// Generador de cartas 

var listaCartas = ["The Wave", "The Big", "The Fight", "The Fly", "The Mirror", "The Cloud", "The Through", "The Arrow", "The Float", "The Sword",
                     "The Sweet", "The Dark", "The Time", "The Twins", "The Watery", "The Dream", "The Rain", "The Dash", "The Erase", "The Lock",
                     "The Wood", "The Return", "The Power", "The Light", "The Firey", "The Shadow", "The Storm", "The Sand", "The Thunder",
                     "The Create", "The Wind", "The Freeze", "The Mist", "The Shot", "The Flower", "The Shield", "The Loop", "The Maze",
                     "The Silent", "The Earthy", "The Jump", "The Glow", "The Voice", "The Change", "The Song", "The Sleep", "The Move",
                     "The Illusion", "The Little", "The Bubbles", "The Snow", "The Libra"];
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
    var resultado = "";
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
    resultado = listaCartas[numCarta];

    if (cartaInvertida())
        resultado += ", invertida"

    return resultado;
}

function cartaInvertida()
{
    var resultado = false;
    var num = 0;

    num = Math.floor((Math.random() * 10));
    resultado = (num % 2 != 0) ? true : false;

    return resultado;
}

// Limpiando lista de valores obtenidos
function limpiarListas() {
    valoresObtenidos = [];
}