//Estruturas de repetições
// For, loop, arrays, etc
// Códigos que se repetem até completarem sua tarefa


const divFor = document.querySelector('#div-for')

//toda e qualquer estrutura de repetição obrigatoriamente tem que ter uma condição de parar, se não roda infinitamente causa problemas de memoria, ou crash (flag de saida)

for (i = 0; i < 11; i++) {
    console.log(i)
    divFor.innerHTML += `${i} <br>`
}

//CONTADOR E ACUMULADOR
const inputNum1 = document.querySelector('#num1')
const btnNum1 = document.querySelector('#btn-num1')
const divResult = document.querySelector('#result-cont-acum')

let cont = 0, contPar = 0, contImpar = 0
//contador, e já fez entrada de outras variaveis com apenas um let

let acum = 0.0 //zero com outro zero?
//acumulador

// se lembre de fechar em chaves quando em js quiser um evento depois de condição??

btnNum1.addEventListener('click', (evt) => {
    let numDigitado = Number(inputNum1.value)

    cont++
    //vai adicionando de 1 em 1
    acum += numDigitado
    //vai acumulando os valores digitados, += é importante

    if (numDigitado % 2 == 0) {
        contPar++
    }
    else {
        contImpar++
    }

    divResult.innerHTML = `Total de números digitados: ${cont} <br> A soma dos itens digitados: ${acum}: <br>
    Total de número par digitado ${contPar}: <br>
    Total de números impares digitados: ${contImpar}: <br><br>`

    inputNum1.value = ''


    //parece que <br> é para colocar uma nova linha??


}
)

//aprender mais sobre anexarCoisas.comPontos
//Repetição com WHILE
//textContent?


const inputFrase = document.querySelector('#msg')
const inputNumRepticao = document.querySelector('#numRepeticao')
const btnExibir = document.querySelector('#btn-exibir')
const divResultFrase = document.querySelector('#result-frase')

let contFrase = 0
let totalRepeticao = 0

btnExibir.addEventListener('click', (evt) => {
    totalRepeticao = Number(inputNumRepticao.value)

    while (totalRepeticao > contFrase) {
        divResultFrase.innerHTML += `${contFrase + 1} - ${inputFrase.value} <br>`
        contFrase++
    }
})

//COLEÇÃO DE DADOS COM ARRAYS

transporte = ['Bicicleta', 'Carro', 'Moto', 'Ônibus', 'Avião', 'Tototo'
    //são apenas strings
]

//bicicleta = index 0; tototo = index 5 (começa do zero sempre)

for (i = 0; i < transporte.length; i++) {
    console.log(transporte[i])
}

// essa estrutura se repete até i ser maior que lenght (lenght = 5 nesse caso, qntd de itens na array)

//FOR IN 
const divForin = document.querySelector('#div-forin')

//document.querySelector targets the tag in the div

for (let pos in transporte) {
    console.log(transporte[pos])
    divForin.innerHTML += `${transporte[pos]} <br>`
}

//FOR OF

const divForOf = document.querySelector('#div-forof')

for (let elem of transporte) {
    divForOf.innerHTML += `${elem} <br>`
}

//COLEÇÃO DE PESSOAS - ARRAY DE OBJETO
const pessoas = [
    { nome: 'Maria', idade: 18, renda: 15000 },
    { nome: 'Rodrigo', idade: 51, renda: 2000 },
    { nome: 'Arthur', idade: 18, renda: 1.50 },
    { nome: 'Karoline', idade: 68, renda: 3.3 }

    //objeto literal, com chaves e propriedades

]

console.log('--------------LISTA FOR IN-------------')
for (let indiceObjPessoa in pessoas) {
    console.log(pessoas[indiceObjPessoa].nome, pessoas[indiceObjPessoa].idade, pessoas[indiceObjPessoa].renda)

    //note como essas duas fazem a mesma coisa, mas claro tem especialidades e questões de desempenho diferentes??

}
console.log('--------------LISTA FOR OF-------------')
for (let pessoa of pessoas) {
    console.log(pessoa.nome, pessoa.idade, pessoa.renda)
}


//for each
//faz a repetição e executa a função

const divForEach = document.querySelector('#div-foreach')

//pega o array pessoas 
//pegou elemento e indice??

pessoas.forEach((elem, i)=>{
    divForEach.innerHTML += `${i} - ${elem.nome}, ${elem.idade} anos com renda R$ ${elem.renda.toFixed(2).replace('.',',')} <br>`
})

