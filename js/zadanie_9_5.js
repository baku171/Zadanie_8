var buttons = document.getElementsByClassName('button');
console.log(buttons);

var countElements = buttons.length

// console.log(countElements);
// console.log(buttons[2].innerText);

for (var index = 0; index < countElements; index++) {
    alert(buttons[index].innerText)  
};