// Importing the realine-sync module
const readlineSync = require("readline-sync");

let listaProp = [];

console.log('Ola! Digite uma propriedade CSS ou digite Sair para finalizar a aplicacao!');

while(true){

    const propCSS = readlineSync.question('Digite uma propriedade CSS!');

    if(propCSS == ''){

        console.log('Não deixe vazio!');
     
     } else if (propCSS !='' && propCSS != 'sair'){

        listaProp.push(propCSS);
         console.log(listaProp.sort());
         continue;

     } else if (propCSS == 'sair'){

        console.log('Tchau tchau!');
        break;
     }
}

