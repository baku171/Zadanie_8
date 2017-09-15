// scripts.js

//var name = prompt('Enter your name');
//alert('Hello, ' + name);
//console.log('Hello, ' + name);

//Komentarz liniowy

/*
Komentarz blokowy
*/
//Zmienne
var a = prompt('Podaj długość podstawy'),
    h = prompt('Podaj wysokość'),
    b = prompt('Podaj wartość b'),
    triangleArea = a * h / 2,
    value = (a * a) + (2 * a * b) - (b * b);
//Pole trójkąta
console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
alert('Pole trójkąta wynosi: ' + triangleArea);
//Warunki
console.log('Wynik działania wynosi: ' + value);
if (value > 0) {
    console.log('Wynik dodatni');
} else if (value < 0) {
    console.log('Wynik ujemny');
} else {
    console.log('Wynik zerowy');
}
