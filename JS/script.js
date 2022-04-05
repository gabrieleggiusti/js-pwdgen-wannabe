/*
Chiedi all’utente:
1) Il suo nome;
2) il suo cognome;
3) il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22
*/

const firstName = prompt ('Inserisci il tuo nome');

const lastName = prompt ('Inserisci il tuo cognome');

const color = prompt ('Inserisci il tuo colore preferito');


console.log (firstName);
console.log (lastName);
console.log (color);

const message = firstName + lastName + color + '22';

const message1 = `${firstName}${lastName}${color}22`;

console.log (message1);

document.getElementById ('output-str').innerHTML= message1;
/*
document.getElementById ('dati').innerHTML=

//Genero la stringa da stampare

const outputstr =

`
Il mio nome e cognome sono <strong> ${firstName} ${lastName} </strong> 
e il mio colore preferito è <strong> ${color} </strong>.
`;


//stampo in pagina
document.getElementById('output-str').innerHTML=outputstr


console .log (outputstr);

*/