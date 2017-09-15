var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUppercase = dinosaur.toUpperCase();
var changedText = text.replace('Velociraptor', dinosaurUppercase);

console.log(changedText.substr(0, changedText.length / 2));