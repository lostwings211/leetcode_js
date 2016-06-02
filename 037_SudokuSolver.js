/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    if(board.length == 0 || board[0].length == 0) {
        return;
    }
    dfs(board);
};

var dfs = function(board) {
    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board.length; j++) {
            if(board[i][j] == '.') {
                for(var val = 1; val <= 9; val++) {
                    if(isGoodStep(board, i, j, val.toString())) {
                        board[i][j] = val.toString();
                        if(dfs(board) == true) {
                            return true;
                        }
                        else {
                            board[i][j] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

var isGoodStep = function(board, i, j, c) {
    var index = 0;
    for(index = 0; index < board.length; index++) {
        if(board[i][index] == c) {
            return false;
        }
    }

    for(index = 0; index < board.length; index++) {
        if(board[index][j] == c) {
            return false;
        }
    }

    for(var row = Math.floor(i / 3) * 3; row  < Math.floor(i / 3) * 3 + 3; row++ ) {
        for (var col = Math.floor(j / 3) * 3; col < Math.floor(j / 3) * 3 + 3; col++) {
            if(board[row][col] == c) {
                return false;
            }
        }
    }
    return true;
}