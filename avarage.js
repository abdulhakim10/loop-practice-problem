var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;

var avarage = totalMarks / 5;
var avarageTwoDesimal = avarage.toFixed(2);
var avarageParseFloat = parseFloat(avarageTwoDesimal);
console.log(avarageParseFloat);