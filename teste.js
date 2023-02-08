// var caminho = '5Km'
// var corro = '2Km'

// if(caminho === '5Km' && corro === '2Km'){
//     console.log("Passo o dia bem.")
// }

// var levanto = 'antes das 8'

// if(levanto === 'cedo' || levanto === 'antes das 8'){
//     console.log("Saio tranquilo.")
// }

// var termino = 'o trabalho'
// var tenho = 'compromisso'

// if(!termino === 'o trabalho' || !tenho === 'compromisso'){
//     console.log("Saio tarde.")
// }

var numero = 5
var contador = 0

for (let index = 0; index <= numero; index++) {
   switch (numero % index) {
        case 0:
            contador ++
        break;
   
        default:
        break;
    }
}

switch (contador) {
    case 2:
        console.log("o número", numero, "é primo") 
    break;

    default:
        console.log("o número", numero, "nao é primo")
    break;
}
 