// scripts.js

var name = prompt('Enter your name');
//alert('Hello, ' + name);
console.log('Hello, ' + name);

//Komentarz liniowy

/*
Komentarz blokowy
*/
var a = prompt('Podaj długość podstawy'),
    h = prompt('Podaj wysokość')
    triangleArea = a*h/2;

console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
alert('Pole trójkąta wynosi: ' + triangleArea)