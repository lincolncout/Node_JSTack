// PARTE 1

// tem o seu proprio this (valor da função)
// classe em JS é uma function com construtor
function minhaFunction(){
    this.name = "Joao";
}

// new --> a função vira um objeto (undefined -> objeto) 
// podendo atribuir propriedades com o this
console.log( typeof new minhaFunction())

// herda o this do escopo onde foi criada  
// não tem um construtor -> não é um objeto
const minhaArrowFunction = () => {};

// PARTE 2
// Como receber vários parâmetros de forma dinâmica?


function soma(primeiroParametro, ...argumentos){
    // Exemplo 1
    console.log(Object.values(arguments))

    // Exemplo 2 -> único jeito de fazer em arrow function
    console.log(primeiroParametro)
    console.log(argumentos)
}

soma(1,2,3,4,5,6,7, "Luis")

// PARTE 3

// Short syntax 
const soma2 = () => "hello world";


const algumNumero = 10 
const soma3 = () => (algumNumero >= 10 ? "Maior igual a 10" : "menor que 10"); 
const getUser = () => ({ id: 123, name: "Matheus"})

