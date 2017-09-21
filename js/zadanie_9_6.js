var button = document.getElementById('addElem');
var list = document.getElementById('list');

button.addEventListener("click", function() {
    var element = document.createElement("li");
    var elementNumber = list.getElementsByTagName("li").length;
    // Odejmuję 4 żeby nie usuwać li z html'a.
    element.innerHTML = 'item ' + elementNumber;
    list.appendChild(element);
});