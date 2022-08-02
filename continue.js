// var numbers = [20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 20, 130, 40, 50,];

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     if (number > 50) {
//         continue;
//     }

//     console.log(number);
// }


var items = ['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'pen') {
        continue;
    }
    console.log(item);
}