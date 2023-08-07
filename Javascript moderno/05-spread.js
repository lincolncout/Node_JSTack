const user = {
    firstName: "Joao",
    lastName: "Fernandes",
    full_name: "Joao Fernandes",
    age: 30,
    instagram: "@jooao",
    skills: ['Comunicação', "Mobile", "Testes"],
    active: false
}

// quebram a imutabilidade do objeto -> importante para react
    // user.active = true;
    // merge dos elementos
    // Object.assign(user, {active: true})


// segue o princípio da imutabilidade
// ultimo valor de uma propriedade sobrescreve 
// não segue a regra do rest de precisar ser a ultima informação
const updatedUser = {
    ...user,
    skills: [...user.skills, "Marketing"],
    active: true
}

// Spread (espalhar) operator 
console.log({user})
console.log({updatedUser})