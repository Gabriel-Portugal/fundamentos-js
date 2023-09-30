/*Tipo de dado

Booleanos
*/

// conversão implicita

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString) 
console.log(numero === numeroString)
console.log( numero + numeroString)
/*
 = Atribui um valor a uma variavel 
 == Compara o valor que contem um variavel
 === Compara valor e o tipo

 + Concatenação

 */

 // Conversão explicita

 console.log(numero + Number(numeroString))