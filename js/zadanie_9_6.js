var button = document.getElementById('addElem');
var list = document.getElementById('list');

button.addEventListener("click", function() {
    var element = document.createElement("li");
    var elementNumber = list.getElementsByTagName("li").length;
    element.innerHTML = 'item ' + elementNumber;
    list.appendChild(element);
});