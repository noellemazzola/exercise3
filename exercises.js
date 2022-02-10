//3.1 flattening(list)
// look at about 1 hour and 35 minutes for help

let arrays = [[1, 2, 3], [4, 5], [6]]
export function flattening(list) {
    return list.reduce((previousValue, currentValue) => previousValue.concat(currentValue) )
}
console.log(flattening(arrays))

//3.2 loop(value, test, update, body)

export function loop(value, test, update, body) {
    for(let curValue = value; test(curValue); curValue = update(curValue)) {
        body(curValue)
    }
}
loop(3, n => n > 0, n => n -1, console.log);

//3.3 everyLoop(array, test)
//3.4 everySome(array, test)

function everyLoop(array, test) {
    let returnValue = true
    for(let item of array) {
        returnValue = returnValue && test(item)
    }
}