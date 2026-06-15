//Estruturas de repetições
// For, loop, arrays, etc
// Códigos que se repetem até completarem sua tarefa


const divFor = document.querySelector('#div-for')

//toda e qualquer estrutura de repetição obrigatoriamente tem que ter uma condição de parar, se não roda infinitamente causa problemas de memoria, ou crash (flag de saida)

for (i = 0; i < 11; i++)
{
    console.log(i)
    divFor.innerHTML += `${i} <br>`
}

//CONTADOR E ACUMULADOR
const inputNum1 = document.querySelector('#num1')
const btnNum1 = document.querySelector('#btn-num1')
const divResult = document.querySelector('#result-cont-acum')

let cont = 0
//contador
let acum = 0.0 //zero com outro zero?
//acumulador

// se lembre de fechar em chaves quando em js quiser um evento depois de condição??

btnNum1.addEventListener('click', (evt)=>
{
    let numDigitado = Number(inputNum1.value)

    cont++
    acum += numDigitado

    divResult.innerHTML = `Total de números digitados: ${cont} <br> A soma dos itens digitados: ${acum}`


}
)

