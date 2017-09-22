var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
//Połączenie tablic
var allNames = femaleNames.concat(maleNames);
//Nowa wartość
var newName = 'Marian';

//Dodawanie wartości
if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}
console.log(allNames);