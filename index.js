// Importando o módulo realine-sync
const readlineSync = require("readline-sync");

//Array para armazenar as propriedades
let listaProp = [];

console.log('Ola! Digite uma propriedade CSS ou digite Sair para finalizar a aplicacao!');

while(true){

    //armazenando a resposta do usuário
    const propCSS = readlineSync.question('Digite uma propriedade CSS!');

    if(propCSS == ''){

        console.log('Não deixe vazio!');
     
     } else if (propCSS !='' && propCSS != 'sair'){

        listaProp.push(propCSS);
         continue;

     } else if (propCSS == 'sair'){

        //array em ordem alfabética
        console.log(listaProp.sort());

        console.log('Tchau tchau!');
        break;
     }
}

