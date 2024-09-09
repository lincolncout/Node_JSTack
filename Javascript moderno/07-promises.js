const apiCall  = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Sucesso")
    reject("Erro!")
  }, 2000);
})

// Primeiro modo de fazer uma chamada de API

// apiCall.then((resposta) => {
//   console.log(resposta)
// }). 
// catch((erro) => {
//   console.log(erro)
// })

// Segundo modo de fazer uma chamada de API

async function run(){
  try{
    const resposta = await apiCall;
    console.log(resposta);
  }catch(erro){
    console.log(erro)
  }
}

run();
