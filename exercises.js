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

export function everyLoop(array, test) {
    let returnValue = true
    for(let item of array) {
        returnValue = returnValue && test(item)
    }
    return returnValue
}

console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));

export function everySome(array, test) {
    return !array.some(item => {
        console.log("Applying the test to " + item + " with result " + test(item))
        if (!test(item)) {
            console.log("I found an item that doesn't meet the test!")
        }
        return !test(item)
})
}
console.log(everySome([1, 3, 5], n => n < 10));
console.log(everySome([2, 4, 16], n => n < 10));
console.log(everySome([], n => n < 10));