// O que e um console?
// E uma ferramenta contida no Node e nos Navegadores, com finalidade de trazer dados para fora
// da nossa aplicação, porém sem aparecer de forma direta para o usuario 
// log -> registro

const minhaVar = true;

console.log(245)
console.log("Eu sou um texto")
console.log(minhaVar)

//tratamento de error

console.log("deu erro");
console.error(new Error("deu erro"));
/* 
    console.error() para exibir mensagens de erro;
    console.table() para visualizar de forma mais organizada informações tabulares;
    console.time() e console.timeEnd() para temporizar período que uma operação de código 
    leva para ser iniciada e concluída;
    console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados)
    por onde o código executado passou durante a execução.
*/

/* 
    JavaScript e uma linguagem interpretada e dinamicamente tipada.
    NodeJS e um interpretador de JavaScript para backend, nao e executado no navegador mas no servidor
    Stacktrace - Chamado de pilha que nos auxilia a saber o que esta acontecendo quando temos um error
    