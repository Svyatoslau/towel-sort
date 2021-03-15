
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix && matrix.length != 0) {
        var array = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i == 0 || i % 2 == 0) {
                array = array.contact(matrix[i]);
            } else {
                array = array.contact(matrix[i].reverse());
            }  
        }
        return array;
    }
    return [];
}
