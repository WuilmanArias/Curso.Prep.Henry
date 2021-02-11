// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Wuilman";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 50;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:
    var nombre = str;
    return nombre;
}

function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    var resSuma = x + y;
    return resSuma;
}

function resta(x, y) {
    // Resta "y" de "x" y devuelve el valor
    // Tu código:
    var resResta = x - y;
    return resResta;
}

function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    var resMultiplica = x * y;
    return resMultiplica;
}

function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    var resDivide = x / y;
    return resDivide;
}

function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:
    var a = x;
    var b = y;
    if (a == b) {
        return true;
    } else {
        return false;
    }
}

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    var a = str1.length;
    var b = str2.length;
    if (a == b) {
        return true;
    } else {
        return false;
    }
}

function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    var a = num;

    if (a < 90) {
        return true;
    } else {
        return false;
    }
}

function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    var a = num;

    if (a > 50) {
        return true;
    } else {
        return false;
    }
}

function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    var resto = x % y;
    return resto;
}

function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    var a = num % 2;

    if (a == 0) {
        return true;
    } else {
        return false;
    }
}

function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    var a = num % 2;

    if (a == 0) {
        return false;
    } else {
        return true;
    }
}

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    var resCuadrado = num ** 2;
    return resCuadrado;
}

function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    var resCubo = num ** 3;
    return resCubo;
}

function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    var resElevar = num ** exponent;
    return resElevar;
}

function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    var resul = Math.round(num);
    return resul;
}

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    var resul = Math.ceil(num);
    return resul;
}

function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    var resul = Math.random();
    return resul;
}

function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    var a = numero;
    if (a > 0) {
        return "Es positivo";
    }
    if (a < 0) {
        return "Es negativo";
    } else {

        return false;
    }

}

function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    var a = str + "!";
    return a
}

function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Henry" -> "Soy Henry"
    // Tu código:
    var a = nombre + " " + apellido;
    return a
}

function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    var a = "Hola" + " " + nombre + "!";
    return a
}

function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    var resAreaRectangulo = alto * ancho;
    return resAreaRectangulo;
}


function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    var resPerimetro = lado * 4;
    return resPerimetro;
}


function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    var resAreaTriangulo = (base * altura) / 2;
    return resAreaTriangulo;
}


function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    var resEuroAdolar = euro * 1.20;
    return resEuroAdolar;

}


function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //Escribe tu código aquí
    var longitudLetra = letra.length;
    var letraMin = letra.toLowerCase();

    if (longitudLetra > 1) {
        return "Dato incorrecto"
    }
    if (letraMin == "a" || letraMin == "e" || letraMin == "i" || letraMin == "o" || letraMin == "u") {
        return "Es vocal";
    } else {
        return "Es consonante";
    }
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    nuevaString,
    nuevoNum,
    nuevoBool,
    nuevaResta,
    nuevaMultiplicacion,
    nuevoModulo,
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueNoventa,
    mayorQueCincuenta,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    elevarAlCuadrado,
    elevarAlCubo,
    elevar,
    redondearNumero,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    obtenerSaludo,
    obtenerAreaRectangulo,
    retornarPerimetro,
    areaDelTriangulo,
    deEuroAdolar,
    esVocal,
};