/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if(matrix.length <= 1) {
        return;
    }
    var n = matrix.length;
    var map = {};
    for(var i = 0; i < n; i++) {
        for(var j = 0; j < n; j++) {
            if(check_visit(i, j, n, map) == false) {
                var temp = matrix[i][j];
                matrix[i][j] = matrix[n-1-j][i];
                matrix[n-1-j][i] =  matrix[n-1-i][n-1-j];
                matrix[n-1-i][n-1-j] =  matrix[j][n-1-i];
                matrix[j][n-1-i] = temp;
            }
        }
    }

    function check_visit (i, j, n, map) {
        var corner_i = i;
        var corner_j = j;
        if(j <  corner_i || (j == corner_i &&  n - 1- i < corner_j)) {
            corner_i = j;
            corner_j = n - 1 - i;
        }
        if(n - 1 - i <  corner_i || (n - 1 - i == corner_i &&  n - 1 - j < corner_j)) {
            corner_i = n - 1 - i;
            corner_j = n - 1 - j;
        }
        if(n - 1 - j <  corner_i || (n - 1 - j == corner_i &&  i < corner_j)) {
            corner_i = n - 1 - j;
            corner_j = i;
        }
        if(map.hasOwnProperty(corner_i.toString()) && map[corner_i.toString()].hasOwnProperty(corner_j.toString())) {
            return true
        }
        if(!map.hasOwnProperty(corner_i.toString())) {
            map[corner_i.toString()] = {};
        }
        map[corner_i.toString()][corner_j.toString()] = true;
        return false;
    }
};