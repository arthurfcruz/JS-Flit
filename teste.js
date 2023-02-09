// var array = [12,6,9,42,11,102,44,25]
// var soma = 0

// for (let index = 0; index < array.length; index++) {
//     soma = soma + array[index]
//     console.log(soma)
// }

// for (let i = 0; i < 90; i++) {
//     while ((i < 40 || i > 50) && i < 90) {
//         console.log(i)
//         i++
//     }
// }

var numero = 0
var contador = 0
var primo = false

while (primo == false) {
    for (let index = 0; index <= numero; index++) {
        if (numero % index == 0) {
            contador ++
        }
    }
    
    if (contador == 2) {
        primo = true
    }else{
        contador = 0
        numero ++
    }
    console.log(numero)
}