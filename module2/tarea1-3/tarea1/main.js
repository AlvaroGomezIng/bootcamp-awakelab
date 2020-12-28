/*        NOTE: You can comment and uncomment the activities in order to visualize them individually as you prefer        */

/* ------------------------------------------------------------------------------------------ */

/*     ACTIVITY 1: JavaScript Básico     */

/* Variable declaration */
var nombre;
var admin;

/* Value assignation */
nombre = "John";
admin = nombre;

/* Writing the variable value in html page */
document.writeln(admin + "<br><br>");


/* ------------------------------------------------------------------------------------------ */


/*     ACTIVITY 2: JavaScript Básico     */

/* First message in console */
console.log("iniciando javascript ...");

/* Exercise 1 */
var myName;
myName = "Alvaro";
console.log("My name is " + myName + ".");

/* Exercise 2 */
var myAge;
myAge = 20; /* Here you can try writing different ages */
console.log("I'm " + myAge + " years old.");

/* Exercise 3 */
var ignasiAge;
ignasiAge = 32;
console.log("Ignasi is " + ignasiAge + " years old.");

var ageDiff;
ageDiff = Math.abs(myAge-ignasiAge);
console.log("There are around " + ageDiff + " years between me and Ignasi.");

/* Exercise 4 */
if (myAge > 21){
    console.log("You are older than 21 years old.");
    document.write("You are older than 21 years old. <br>");
}

else if (myAge < 21){
    console.log("You are not older than 21 years old.");
    document.write("You are not older than 21 years old. <br>");
}

else {
    console.log("You are 21 years old.");
    document.write("You are 21 years old. <br>");
}

/* Exercise 5 */
if (myAge > ignasiAge){
    console.log("Ignasi is younger than you.");
    document.write("Ignasi is younger than you. <br>");
}

else if (myAge < 21){
    console.log("Ignasi is older than you.");
    document.write("Ignasi is older than you. <br>");
}

else {
    console.log("You and Ignasi are the same age.");
    document.write("You and Ignasi are the same age. <br>");
}


/* ------------------------------------------------------------------------------------------ */


/* ACTIVIDAD 3: JavaScript - Funciones de Arrays */

console.log("Here we are working with Arrays functions");

/*     EXERCISE 1     */

console.log("EXERCISE 1");

var participantes;
participantes = ["Alexis", "Alvaro", "Ana Maria", "Blanca", "Carlos", "Carol", "Carolina", 
    "Daniel", "David", "Demian", "Edgar", "Francisca", "Francisco", "Hiram", "Jonathan", "Juanita", 
    "Karina", "Marcela", "Margan", "Maria", "Maria Pia", "Mauricio", "Nataly", "Nicole", "Tania", 
    "Vania", "Victor"];

console.log("The first one on the class list is " + participantes[0]);
console.log("The last one on the class list is " + participantes[participantes.length-1]);

for (let i = 0; i < participantes.length; i++) {
    console.log(participantes[i]);
}


/*     EXERCISE 2     */

console.log("EXERCISE 2");

var edades;
edades = [30, 27, 24, 25, 26, 28, 23, 32, 23, 22, 29, 31, 22, 24, 25, 33, 22, 27, 26, 24, 30, 27, 23, 24, 30, 29, 38];

console.log("First part of Exercise 2");

i = 0; /* we indicate the initial value so the loop can start running */
while (i < edades.length){ /* the upper limit es edades.length because we are using the strict operator "<" */
    console.log(edades[i]);
    i++
}

console.log("Second part of Exercise 2");

i = 0;
while (i < edades.length){
    if (edades[i]%2 == 0){
        console.log(edades[i]);
    }

    else {
        console.log("Age is an odd number");
    }

    i++
}

console.log("Third part of Exercise 2");

for (let i = 0; i < edades.length; i++){
    if (edades[i]%2 == 0){
        console.log(edades[i]);
    }

    else {
        console.log("Age is an odd number");
    }
}


/*     EXERCISE 3     */

console.log("EXERCISE 3. Please try function minArray(edades)");

function minArray(arrayInput) {
    return Math.min.apply(Math, arrayInput);
}


/*     EXERCISE 4     */

console.log("EXERCISE 4. Please try function maxArray(edades)");

function maxArray(arrayInput) {
    return Math.max.apply(Math, arrayInput);
}


/*     EXERCISE 5     */

console.log("EXERCISE 5. Please try function arrayIndex(edades, (choose your index between 0 and 26))");

function arrayIndex(array, i) {
    elemento = array[i];
    return elemento
}


/*     EXERCISE 6     */

console.log("EXERCISE 6");

function repArray(array){
    /* 
    ages = [10, 11, 10, 12]
    repArray(ages) = [10] */
    let rep = [];

    for (let i = 0; i < array.length; i++) {
        let j = 0;
        while (j != i){
            if (array[i] == array[j]) {
                if (!rep.includes(array[j])){
                    rep.push(array[j]);
                }   
            }
            j++
        }
    }
    return rep;
}


/*     EXERCISE 7     */

console.log("EXERCISE 7");

var myColor;
myColor = ["Red", "Green", "White", "Black"];

function stringList(array) {
    let a = ""
    for (let i = 0; i < array.length; i++) {
        a = a + "\"" + array[i] + "\""
        if (i != array.length-1) {
            a = a + ","
        }
    }
    return a
}



/* ------------------------------------------------------------------------------------------ */



/* ACTIVIDAD 4: JavaScript - Funciones de Strings */

console.log("Here we are working with Strings functions");

/*     EXERCISE 1     */

console.log("EXERCISE 1");

function invStr(str) {
    b = "";
    for (let i = 0; i < str.length; i++) {
        b = b + str[str.length-1 - i];
    }
    return b
}


/*     EXERCISE 2     */

console.log("EXERCISE 2");

function alfStr(str) { /* QUEDA PENDIENTE REVISAR QUE NUMEROS Y PUNTUACION NO PASEN */
    let a = [];
    for (let i = 0; i < str.length; i++) {
        a.push(str[i]);
    }

    b = a.sort();
    let c = "";
    for (let j = 0; j < b.length; j++) {
        c += b[j];
    }
    return c
}


/*     EJERCICIO 3     */

console.log("EXERCISE 3");

function capFromStr(str) {
/* Transformar string separado por espacios en arreglo */
    let a = "";
    let b = [];
    for (i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            a += str[i];
        }
        else {
            b.push(a)
            a = ""
        }
    }
    b.push(a)

/* Transformar arreglo en string con mayúsculas incluidas */
    let c = "";
    /* recorrido por cada elemento string del arreglo */
    for (k = 0; k < b.length; k++) {
        /* recorrido por cada string del elemento string */
        for (h = 0; h < b[k].length; h++) {
            if (h == 0){
                c += b[k][h].toUpperCase()
            } else {c += b[k][h]}
        }
        /* agregar espacio al final de cada palabra excepto la última */
        if (k != b.length-1) {
            c += " "
        }
    }
    return c
}



/*     EXERCISE 4     */

console.log("EXERCISE 4");

/* funciona cuando la palabra más larga es única, arreglar para caso en que hay más de una */
function longStr(str) {
    /* crear arreglo de strings a partir de string */
    a = str.split(" ");
    let b = []
    /* obtener largo de string en cada elemento de arreglo */
    for (i = 0; i < a.length; i++) {
        b.push(a[i].length)
    }
    /* obtener el largo de palabra mayor */
    c = Math.max.apply(null, b)
    /* devolver la palabra en el índice del largo mayor */
    return a[b.indexOf(c)]
}