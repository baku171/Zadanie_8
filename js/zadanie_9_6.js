var button = document.getElementById('addElem');
var list = document.getElementById('list');

button.addEventListener("click", function() {
    var element = document.createElement("li");
    var elementNumber = document.getElementsByTagName("li").length;
    element.innerHTML = 'item ' + (elementNumber - 4);
    list.appendChild(element);
});