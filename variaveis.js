//Tipo de variaveis 
// Var pode ser usada antes de ser declarada 

// var altura = 5;
// var comprimento= 7;

// area = altura * comprimento;

// console.log(area);

// var area;

// //////////////

// let forma ='retângulo'
// let altura2 = 5;
// let comprimento2  = 7;

// if (forma === 'retângulo'){
//     area2 = altura2 * comprimento2;
// } else{
//     area2 = (altura2 * comprimento2) / 2;
// }

// console.log(area2);

const forma="quadrado";
const altura = 5;
const comprimento = 7;
let area;

if ( forma === "triangulo"){
    area = altura * comprimento;
} else {
    area = altura * comprimento / 2;
}

console.log(area)