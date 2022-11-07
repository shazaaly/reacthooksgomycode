let testArray = [-10, 20, 5]

function test(arr) {

    let i = 0
    let sum = 0
    while (i < arr.length) {
        sum += arr[i]
        i++

    }

    return sum

}
console.log(test(testArray))