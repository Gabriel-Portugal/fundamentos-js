/*
    Operador de adição +
    Operador de subtração -
    Operador de multiplicação *
    Operador de divisão /

    Operador "ou" ||, retorna true caso uma condição seja valida
    OPerador "e" &&, retorna true somente se todas as condições forem válidas
    Operadores "não igual" e "estritamento não igual" != e !==, utilizados para comparação 
    da mesma forma que == e ===

*/

//Operador ternário 

const idadeMinima = 18;
const idadeCliente = 16;

// if (idadeCliente >= idadeMinima){
//     console.log("Liberado")
// }else{
//     console.log("Não liberado")
// }

console.log(idadeCliente >= idadeMinima ? "Liberado" : "Não liberado")