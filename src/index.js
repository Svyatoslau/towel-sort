
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix && matrix.length != 0) {
        var array = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i == 0 || i % 2 == 0) {
                for (let k = 0; k < matrix.length; k++) {
                    array.push(matrix[i][k]);
                }
            } else {
                for (let k = matrix.length - 1; k >= 0; k--) {
                    array.push(matrix[i][k]);
                }
            }  
        }
        return array;
    }
    return [];
}
