const fs = require('fs');
const json = require('./JSON TERMO FALSE.json')

const textsEmail = json.RECORDS.map((nome) => {
    return `Olá, ${nome.id_funcionario}, tudo bem? Assine o termo => ${nome.link_termo}`
})


const stringEmail = textsEmail.join("\n");

fs.writeFileSync("email.txt", stringEmail);

console.log(stringEmail);