const user = {
    firstName: "Joao",
    lastName: "Fernandes",
    full_name: "Joao Fernandes",
    age: 30,
    instagram: "@jooao",
    skills: ['Comunicação', "Mobile", "Testes"]
}

// Destructuring
const { instagram , age, skills, full_name : fullName} = user;
const [primary, secondary, tertinary, quaternary] = skills

console.log(fullName)