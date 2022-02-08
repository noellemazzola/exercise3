//3.1 flattening(list)
// look at about 1 hour and 35 minutes for help
let arrays = [[1, 2, 3], [4, 5], [6]]

export function flattening(inputList) {
     return inputList.reduce((array1, array2) => array1.concat(array2))
}

console.log(flattening(arrays))

//3.2 loop(value, test, update, body)
export function loop(value, test, update, body) {
    while (test(value)) {
        body(value)
        value = update(value)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
//3.3 everyLoop(array, test)


//3.4 everySome(array, test)