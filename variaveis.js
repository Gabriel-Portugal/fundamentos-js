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


// Palavras reservadas 

let var = 1;
let if = 2;
let const = "Alura"

console.log("A soma e " + (var * if))

/*
arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yield

Futuras palavras que podem ser restringidas

enum
implements
interface
package
private
protected
public
*/

/*
    Conclusões
    Var pode ser usada Global, porem pode gerar confusao com a logica
    Let e const tem escopo local , e const nao pode ser alterada
    Valores para false em JS null, undefined, 0, NaN, e Strings vazias
    Null usamos quando nao queremos dar um valor para a variavel, e um objeto em JS
