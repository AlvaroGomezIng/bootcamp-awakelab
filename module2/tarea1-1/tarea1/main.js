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