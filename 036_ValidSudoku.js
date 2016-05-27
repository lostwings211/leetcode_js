/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    if(board.length == 0 || !isSquare(board.length)) {
        return false;
    }
    var len = board.length;
    var len_sqrt = Math.sqrt(len);
    var i = 0;
    var j = 0;
    var map = {};
    var curr_char = '.';

    for(i = 0; i < len; i++) {
        map = {};
        curr_char = '.';
        for (j = 0; j < len; j++) {
            curr_char = board[i][j] ;
            if(curr_char !=  '.') {
                if(map.hasOwnProperty(curr_char)) {
                    return false;
                }
                map[curr_char] = true;
            }
        }
        map = {};
        for (j = 0; j < len; j++) {
            curr_char = board[j][i] ;
            if(curr_char !=  '.') {
                if(map.hasOwnProperty(curr_char)) {
                    return false;
                }
                map[curr_char] = true;
            }
        }
        map = {};
        for (j = 0; j < len; j++) {
            var row = Math.floor(i / len_sqrt) * len_sqrt + Math.floor(j / len_sqrt);
            var col = (i % len_sqrt) * len_sqrt + j % len_sqrt;
            curr_char = board[row][col];
            if(curr_char !=  '.') {
                if(map.hasOwnProperty(curr_char)) {
                    return false;
                }
                map[curr_char] = true;
            }
        }
    }
    return true;
};

var isSquare = function(number) {
    if(Math.sqrt(number) *  Math.sqrt(number)  === number) {
        return true;
    }
    return false;
}