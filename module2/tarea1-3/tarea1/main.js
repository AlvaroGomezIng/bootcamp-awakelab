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

/* Defining the array */
var participantes;
participantes = ["Carol", "Maria", "Mauricio", "Edgar", "Carlos", "Alexis", "Tania", 
    "Vania", "David", "Marcela", "Blanca", "Francisca", "Alvaro", "Victor", "Jonathan", "Juanita", 
    "Karina", "Demian", "Margan", "Francisco", "Maria Pia", "Ana Maria", "Nataly", "Nicole", "Carolina", 
    "Daniel", "Hiram"];

/* Sort array alphabetically */
participantes = participantes.sort();

/* Print first and last person from sorted array */
console.log("The first one on the class list is " + participantes[0]);
console.log("The last one on the class list is " + participantes[participantes.length-1]);

/* Print each member from sorted array */
for (i = 0; i < participantes.length; i++) {
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

for (i = 0; i < edades.length; i++){
    if (edades[i]%2 == 0){
        console.log(edades[i]);
    }
    else {
        console.log("Age is an odd number");
    }
}


/*     EXERCISE 3     */

console.log("EXERCISE 3. You can try using function minArray('any array of numbers you want')");

var minArray = arrayInput => Math.min.apply(Math, arrayInput);
console.log("mínimo de edades es: " + minArray(edades));

/*     EXERCISE 4     */

console.log("EXERCISE 4. You can try using function maxArray('any array of numbers you want')");

var maxArray = arrayInput => Math.max.apply(Math, arrayInput);
console.log("máximo de edades es: " + maxArray(edades));

/*     EXERCISE 5     */

console.log("EXERCISE 5. You can try function arrayIndex(edades, ' choose your index between 1 and the length of the array ')");

function arrayIndex(array, i) {
    elemento = array[i-1];
    return elemento
}


/*     EXERCISE 6     */

console.log("EXERCISE 6. You can try using repArray(array of numbers), please remember to include repeated numbers in this array");

function repArray(array){
    /* objetivo de la función:
    ages = [10, 11, 10, 12]
    repArray(ages) = [10] */

    let rep = [];

    /* recorrer cada elemento del arreglo */
    for (let i = 0; i < array.length; i++) {
        let j = 0;
        /* comparar los elementos distintos al que analizo, si no, estaría considerando el número consigo mismo como repetición */
        while (j != i){
            if (array[i] == array[j]) {
                /* mostrar solo una vez cada número que se repite */
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

console.log("EXERCISE 7. You can try using stringList(array of strings)");

var myColor;
myColor = ["Red", "Green", "White", "Black"];

function stringList(array) {
    let a = ""
    for (let i = 0; i < array.length; i++) {
        a += "\"" + array[i] + "\""
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

console.log("EXERCISE 1. You can try using invStr(string)");

function invStr(str) {
    b = "";
    for (let i = 0; i < str.length; i++) {
        b = b + str[str.length-1 - i];
    }
    return b
}

/*     EXERCISE 2     */

console.log("EXERCISE 2. You can try using alfStr(string including numbers and punctuation if you want)");

function alfStr(str) { 
    a = "";
    /* Se define tipo de caracter admitido */
    var alf = /^[A-zÁ-ú]+$/;
    for (i = 0; i < str.length; i++) {
        /* Solo admite caracteres del alfabeto */
        if (alf.test(str[i])) {
            a += str[i];
        }  
    }
    /* Ordenar arreglo alfabéticamente */
    return a.split("").sort().join('');
}

/*     EJERCICIO 3     */

console.log("EXERCISE 3. You can try using capFromStr(insert string with spaces)");

/* Opción A (descomentar y probar)*/

//function capFromStr(str) {
/* Transformar string separado por espacios en arreglo */
    //let a = "";
    //let b = [];
    //for (i = 0; i < str.length; i++) {
        //if (str[i] != " ") {
            //a += str[i];
        //}
        //else {
            //b.push(a)
            //a = ""
        //}
    //}
    //b.push(a)

/* Transformar arreglo en string con mayúsculas incluidas */
    //let c = "";
    /* recorrido por cada elemento string del arreglo */
    //for (k = 0; k < b.length; k++) {
        /* recorrido por cada string del elemento string */
        //for (h = 0; h < b[k].length; h++) {
            //if (h == 0){
                //c += b[k][h].toUpperCase()
            //} else {c += b[k][h]}
        //}
        /* agregar espacio al final de cada palabra excepto la última */
        //if (k != b.length-1) {
        //    c += " "
        //}
    //}
    //return c
//}

/* Opción B */

function capFromStr(str) {
    p = str.split(' ');
    p = p.map(p => p[0].toUpperCase() + p.slice(1));
    console.log(p)
    console.log(p.join(' '));
    return p.join(' ')
}

/*     EXERCISE 4     */

console.log("EXERCISE 4. You can try using longStr(string with spaces)");

/* Opción A (descomentar y probar)*/

/* funciona cuando la palabra más larga es única, arreglar para caso en que hay más de una */
//function longStr(str) {
    /* crear arreglo de strings a partir de string */
    //a = str.split(" ");
    //let b = []
    /* obtener largo de string en cada elemento de arreglo */
    //for (i = 0; i < a.length; i++) {
        //b.push(a[i].length)
    //}
    /* obtener el largo de palabra mayor */
    //c = Math.max.apply(null, b)
    /* devolver la palabra en el índice del largo mayor */
    //return a[b.indexOf(c)]
//}

/* Opción B */

function longStr(str) {
    long = '';
    for (i of str.split(' ')) {
        if (i.length > long.length) {
            long = i;
        }
    }
    return long;
}