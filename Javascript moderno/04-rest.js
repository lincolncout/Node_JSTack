const user = {
    firstName: "Joao",
    lastName: "Fernandes",
    full_name: "Joao Fernandes",
    age: 30,
    instagram: "@jooao",
    skills: ['Comunicação', "Mobile", "Testes"]
}

// Rest (resto) operator -> precisa ser a ultima variável da desestruturação
const {firstName, skills, ...restoUser} = user;
const [primary, ...restoSkills ] = skills

console.log(restoSkills)