
exports.min = function min(array) {
    let minValue = 0

    if (Array.isArray(array) && array.length) {
        for (i = 0; i <= array.length - 1; i++) {
            if (array[i] <= minValue) {
                minValue = array[i]
            }
        }
    } else return 0
    return minValue
}

exports.max = function max(array) {
    let maxValue = 0

    if (Array.isArray(array) && array.length) {
        for (i = 0; i <= array.length - 1; i++) {
            if (maxValue <= array[i]) {
                maxValue = array[i]
            }
        }
    } else return 0

    return maxValue
}

exports.avg = function avg(array) {
    let avg = 0
    let arrSum = 0

    if (Array.isArray(array) && array.length) {
        for (i = 0; i <= array.length - 1; i++) {
            arrSum += array[i]
        }
        avg = arrSum / array.length
    } else return 0

    return avg

}
