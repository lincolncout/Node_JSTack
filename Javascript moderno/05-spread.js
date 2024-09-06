const user = {
    firstName: "Joao",
    lastName: "Fernandes",
    full_name: "Joao Fernandes",
    age: 30,
    instagram: "@jooao",
    skills: ['Comunicação', "Mobile", "Testes"],
    active: false
}

// quebram a imutabilidade do objeto (o objeto não pode ter seu valor alterado) -> importante para react
    // user.active = true;
    // merge dos elementos
    // Object.assign(user, {active: true})


// segue o princípio da imutabilidade
// ultimo valor de uma propriedade sobrescreve (assim o active vai sobrescrever o active do user mudando de false para true)
// não segue a regra do rest de precisar ser a ultima informação
// clona as informacões do usuário
const updatedUser = {
    ...user,
    skills: [...user.skills, "Marketing"],
    active: true
}

// Spread (espalhar) operator 
console.log({user})
console.log({updatedUser})