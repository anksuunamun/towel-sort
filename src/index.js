// You should implement your task here.

module.exports = function towelSort(matrix = []) {

    let unsortedArray = [];

    for (let i = 0; i < matrix.length; i++) {
        if (Array.isArray(matrix[i])) {
            let m = [];
            for (let elem of matrix[i]) {
                m.push(elem);
            }
            if (i % 2 === 0) {
                for (let item of m) {
                    unsortedArray.push(item)
                }
            } else {
                for (let item of m.reverse()) {
                    unsortedArray.push(item)
                }
            }
        }
    }




    return unsortedArray;
}
