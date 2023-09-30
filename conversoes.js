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

 ////////////////////////////////

 //String()

let telefone = 12341234;
console.log("O telefone é " + String(telefone));
console.log("O telefone é " + telefone.toString());

let usuarioConectado = false;
console.log(String(usuarioConectado)); //Conversão de boolean para string sendo falso
usuarioConectado = true;
console.log(String(usuarioConectado)); //Conversão de boolean para string sendo verdadeiro

//Number()

//Vamos calcular a área de um retangulo 
let largura = "10";
let altura = "5";
console.log("A área do retangulo é " + Number(largura) * Number(altura));
console.log("Convertento variavel com sinal de + " + largura * + altura);

//Convertendo boolean em number

let userConected = false;
console.log("Retorna falso " + Number(userConected)); //Falso retorna 0
userConected = true;
console.log("Retorna verdadeiro " + Number(userConected)); //True retorna 1
