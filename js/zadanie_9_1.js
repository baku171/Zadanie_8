function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
        return a * h / 2;
    } else {
        return 'Nieprawidłowe dane';
    };
}
//console.log( getTriangleArea(-6, 10) );

var triangle1Area = getTriangleArea(-5, 10),
triangle2Area = getTriangleArea(10, 16),
triangle3Area = getTriangleArea(15, 12);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
