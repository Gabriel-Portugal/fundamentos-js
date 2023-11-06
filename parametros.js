// O que são parametros de função - Recebe informações para execução 

function soma(numero1, numero2) {
    return numero1 + numero2;
}

// console.log(soma(2, 2));
// console.log(soma(500, 500));
// console.log(soma(-500, 400));

function nomeIdade(nome , idade){
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

console.log(nomeIdade("Gabriel", 30))

function multiplca(numero1, numero2){
    return numero1 * numero2;
}
console.log(multiplca(soma(4,5) , soma(3,3)))

function cumprimentar(){
    return 'Oi gente'
}

function cumprimetaPessoa(nomePessoa){
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimetaPessoa('Gabriel')